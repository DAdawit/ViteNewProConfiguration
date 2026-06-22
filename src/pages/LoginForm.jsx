import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Eye, EyeOff, Lock, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MyLayout from "@/InternalComponents/MyLayout";
import Danger from "@/InternalComponents/common/Alert/Danger";
import useAppStore from "@/Store/useAppStore";
import apiRequest from "@/utils/request";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useUserStore from "@/Store/useUserStore";
import ChangePassword from "./ChangePassword";
import { languageTranslate } from "@/utils/data";

const MAX_ATTEMPTS = 5;
const BLOCK_DURATION = 2 * 60 * 1000;
const BLOCK_STORAGE_KEY = "hadms_login_block_until";

// Define the validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const LoginForm = ({ updateToken }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [apiError, setApiError] = useState(null);
  const language = useAppStore((state) => state.language);
  const fetchUser = useUserStore((state) => state.fetchUser);
  const [changePassword, setChangePassword] = useState(true);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(null);

  useEffect(() => {
    const blockUntil = localStorage.getItem(BLOCK_STORAGE_KEY);
    if (blockUntil) {
      const remaining = parseInt(blockUntil) - Date.now();
      if (remaining > 0) {
        setBlockTimeRemaining(remaining);
        setApiError(languageTranslate(language, "tooManyAttempts"));
      } else {
        localStorage.removeItem(BLOCK_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    if (!blockTimeRemaining || blockTimeRemaining <= 0) return;
    const interval = setInterval(() => {
      setBlockTimeRemaining((prev) => {
        if (!prev || prev <= 1000) {
          localStorage.removeItem(BLOCK_STORAGE_KEY);
          setFailedAttempts(0);
          setApiError(null);
          return null;
        }
        return prev - 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [blockTimeRemaining]);

  const formatTime = (ms) => {
    if (!ms) return "00:00";
    const totalSeconds = Math.ceil(ms / 1000);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "superadmin@gmail.com",
      password: "abcd@1234A",
    },
  });

  const email = watch("email");
  const password = watch("password");

  // Check if all fields are filled
  const isFormFilled = email?.length > 0 && password?.length > 0;

  // Helper function to get input group classes based on errors
  const getInputGroupClass = (fieldName) => {
    const hasError = submitAttempted && errors[fieldName];
    const baseClass = "border-0.5 rounded-lg h-12";

    if (hasError) {
      return `${baseClass} border-destructive-300 bg-destructive-50`;
    }
    if (watch(fieldName)?.length > 0) {
      return `${baseClass} border-primary-500 bg-neutral-50`;
    }
    return `${baseClass} border-primary-200 bg-neutral-50`;
  };

  const onSubmit = async (data) => {
    if (blockTimeRemaining && blockTimeRemaining > 0) return;
    setSubmitAttempted(true);
    setApiError(null);
    // Manually trigger validation
    const isValid = await trigger();
    if (!isValid) {
      // Don't proceed if validation fails - all inputs with errors will show destructive styling
      return;
    }

    try {
      await apiRequest
        .post("/user_api/login_user", data, {
          headers: {
            GET_LGUSER_API: import.meta.env.VITE_APP_GET_LGUSER_API,
          },
        })
        .then(async (response) => {
          const token = response.data?.token;
          sessionStorage.setItem("tID", token);
          sessionStorage.setItem("upw", response.data?.user?.hasChangedPwd);
          updateToken?.(token);
          reset();
          localStorage.removeItem(BLOCK_STORAGE_KEY);
          setFailedAttempts(0);
          setBlockTimeRemaining(null);
          if (response.data?.user?.hasChangedPwd === "no") {
            setApiError(null);
            setChangePassword(false);
          }
          if (response.data?.user?.hasChangedPwd === "yes") {
            await fetchUser();
            setApiError(null);
            window.location.href = "/dashboard";
          }
        })
        .catch((error) => {
          if (error?.response?.status === 429) {
            setBlockTimeRemaining(BLOCK_DURATION);
            setApiError(languageTranslate(language, "tooManyAttempts"));
            return;
          }
          const attempts = failedAttempts + 1;
          setFailedAttempts(attempts);
          if (attempts >= MAX_ATTEMPTS) {
            const blockUntil = Date.now() + BLOCK_DURATION;
            localStorage.setItem(BLOCK_STORAGE_KEY, blockUntil.toString());
            setBlockTimeRemaining(BLOCK_DURATION);
            setApiError(languageTranslate(language, "tooManyAttempts"));
          } else {
            const errorMsg =
              error?.response?.data?.[`Message_${language}`] ||
              languageTranslate(language, "tooManyAttempts");
            setApiError(errorMsg);
            toast.error(errorMsg);
          }
        });
      // Reset submit attempt on success
      setSubmitAttempted(false);
    } catch (error) {
      console.error("Login error:", error);
      // Handle API errors here if needed
    }
  };

  return (
    <MyLayout>
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col rounded-xl py-2 px-8 gap-2.5 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)]">
          {changePassword ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-10"
            >
              <div className="w-full flex flex-col gap-2.5">
                {/* Show API error message */}
                {apiError && <Danger message={apiError} />}

                <div className="w-full flex flex-col">
                  <h1 className="font-medium custom-text-4xl leading-[125%] tracking-tight text-center capitalize">
                    {languageTranslate(language, "welcomeBack")}
                  </h1>
                  <h4 className="font-normal text-base leading-[150%] tracking-tight text-center">
                    {languageTranslate(language, "loginToAccount")}
                  </h4>
                </div>

                <div className="w-full flex flex-col gap-6">
                  <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1">
                      <Label
                        className={`font-medium text-base leading-none tracking-wide align-middle uppercase ${
                          submitAttempted && errors.email
                            ? "text-destructive-500"
                            : "text-primary-900"
                        }`}
                      >
                        {languageTranslate(language, "emailLabel")}
                      </Label>
                      <InputGroup className={getInputGroupClass("email")}>
                        <InputGroupInput
                          type="email"
                          placeholder={languageTranslate(
                            language,
                            "enterEmail",
                          )}
                          className={`${
                            submitAttempted && errors.email
                              ? "text-destructive-900 placeholder:text-destructive-400"
                              : "text-neutral-900"
                          }`}
                          {...register("email")}
                        />
                        <InputGroupAddon>
                          <MailIcon
                            size={24}
                            className={`${
                              submitAttempted && errors.email
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        </InputGroupAddon>
                      </InputGroup>
                      {submitAttempted && errors.email && (
                        <p className="custom-text-sm text-destructive-500 mt-1">
                          {languageTranslate(
                            language,
                            errors.email.message === "Email is required"
                              ? "emailRequired"
                              : "validEmail",
                          )}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1">
                      <Label
                        className={`font-medium text-base leading-none tracking-wide align-middle uppercase ${
                          submitAttempted && errors.password
                            ? "text-destructive-500"
                            : "text-primary-900"
                        }`}
                      >
                        {languageTranslate(language, "passwordLabel")}
                      </Label>
                      <InputGroup className={getInputGroupClass("password")}>
                        <InputGroupInput
                          type={showPassword ? "text" : "password"}
                          placeholder={languageTranslate(
                            language,
                            "enterPassword",
                          )}
                          className={`${
                            submitAttempted && errors.password
                              ? "text-destructive-900 placeholder:text-destructive-400"
                              : "text-neutral-900"
                          }`}
                          {...register("password")}
                        />
                        <InputGroupAddon>
                          <Lock
                            size={24}
                            className={`${
                              submitAttempted && errors.password
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                          <InputGroupButton
                            aria-label="Show password"
                            title="Show password"
                            size="icon-xs"
                            type="button"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          >
                            {showPassword ? (
                              <Eye
                                className={`${
                                  submitAttempted && errors.password
                                    ? "text-destructive-500"
                                    : "text-neutral-400"
                                }`}
                              />
                            ) : (
                              <EyeOff
                                className={`${
                                  submitAttempted && errors.password
                                    ? "text-destructive-500"
                                    : "text-neutral-400"
                                }`}
                              />
                            )}
                          </InputGroupButton>
                        </InputGroupAddon>
                      </InputGroup>
                      {submitAttempted && errors.password && (
                        <p className="custom-text-sm text-destructive-500 mt-1">
                          {languageTranslate(
                            language,
                            errors.password.message === "Password is required"
                              ? "passwordRequired"
                              : "passwordMinLength",
                          )}
                        </p>
                      )}
                    </div>

                    <div className="w-full flex justify-end">
                      <p
                        className="font-normal custom-text-sm leading-none tracking-normal text-right align-middle text-primary-700 cursor-pointer hover:text-primary-900 transition-colors"
                        onClick={() => {
                          navigate("/forgot_password");
                        }}
                      >
                        {languageTranslate(language, "forgotPassword")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {blockTimeRemaining > 0 ? (
                <div className="text-base w-full text-center flex justify-center items-center text-destructive-500 font-medium">
                  <span>
                    {languageTranslate(language, "temporarilyBlocked")}{" "}
                    {formatTime(blockTimeRemaining)}.
                  </span>
                </div>
              ) : (
                <Button
                  type="submit"
                  className={`rounded-full gap-1 py-0.5 px-1.5 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)] font-normal text-base leading-none tracking-normal text-center ${
                    isFormFilled && !isSubmitting
                      ? "bg-primary-700 hover:bg-primary-900 text-neutral-50 cursor-pointer"
                      : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormFilled || isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              )}
            </form>
          ) : (
            <ChangePassword
              setChangePwd={setChangePassword}
              setEmail={() => {}}
              setPassword={() => {}}
            />
          )}
        </div>
      </div>
    </MyLayout>
  );
};

export default LoginForm;
