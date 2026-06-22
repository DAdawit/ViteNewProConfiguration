import React, { useState, useEffect } from "react";
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
import { Eye, EyeOff, Lock, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Danger from "@/InternalComponents/common/Alert/Danger";
import apiRequest from "@/utils/request";
import { toast } from "sonner";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

// Define the validation schema
const changePasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ChangePassword = ({ setChangePwd, setEmail, setPassword }) => {
  const token = sessionStorage.getItem("tID");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const language = useAppStore((state) => state.language);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    setError,
    clearErrors,
    reset,
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  // Check if all fields are filled
  const isFormFilled = newPassword?.length > 0 && confirmPassword?.length > 0;

  // Password strength checks
  const hasMinLength = newPassword?.length >= 8;
  const hasNumber = /[0-9]/.test(newPassword);
  const hasUpperCase = /[A-Z]/.test(newPassword);
  const hasLowerCase = /[a-z]/.test(newPassword);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

  // Check if passwords match (real-time)
  const doPasswordsMatch =
    newPassword === confirmPassword &&
    newPassword?.length > 0 &&
    confirmPassword?.length > 0;
  const isPasswordValid =
    hasMinLength && hasNumber && hasUpperCase && hasLowerCase && hasSpecialChar;

  // Real-time password match validation
  useEffect(() => {
    if (confirmPassword?.length > 0) {
      if (newPassword !== confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: languageTranslate(language, "passwordsMismatch"),
        });
      } else {
        clearErrors("confirmPassword");
      }
    }
  }, [newPassword, confirmPassword, setError, clearErrors, language]);

  // Helper function to get input group classes based on errors
  const getInputGroupClass = (fieldName) => {
    const hasError = errors[fieldName];
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
    // Manually trigger validation
    const isValid = await trigger();
    if (!isValid) {
      return;
    }

    setLoading(true);
    setApiError(null);

    try {
      await apiRequest
        .post(
          "/user_api/chpwd_user",
          { password: data.newPassword },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              GET_CHPWDUSR_API: import.meta.env.VITE_APP_GET_CHPWDUSR_API,
            },
          },
        )
        .then((response) => {
          toast.success(response?.data?.[`Message_${language}`]);
          setShowSuccessModal(true);
          setTimeout(() => {
            sessionStorage.clear();
            reset();
            setLoading(false);
            if (setChangePwd) setChangePwd(true);
          }, 2000);
        })
        .catch((error) => {
          const errorMessage =
            error?.response?.data?.[`Message_${language}`] ||
            languageTranslate(language, "passwordChangeFailed");
          setApiError(errorMessage);
          toast.error(errorMessage);
          setLoading(false);
        });
    } catch (error) {
      console.error("Password change error:", error);
      const errorMessage = languageTranslate(language, "passwordChangeFailed");
      setApiError(errorMessage);
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  const handleReturnToLogin = () => {
    if (setEmail) setEmail("");
    if (setPassword) setPassword("");
    if (setChangePwd) setChangePwd(true);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col rounded-xl p-5 gap-2.5 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)]">
        {!showSuccessModal ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-10"
          >
            <div className="w-full flex flex-col gap-10">
              {/* Show API error message */}
              {apiError && <Danger message={apiError} />}

              <div className="w-full flex flex-col">
                <h1 className="text-primary-900 font-medium custom-text-4xl leading-[125%] tracking-tight text-center capitalize">
                  {languageTranslate(language, "createNewPassword")}
                </h1>
                <h4 className="text-neutral-500 text-[16px] font-normal text-base leading-[1.5] tracking-tight text-center">
                  {languageTranslate(language, "restoreAccess")}
                </h4>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-col gap-1">
                  <Label
                    className={`font-medium text-base leading-none tracking-wide align-middle uppercase ${
                      errors.newPassword
                        ? "text-destructive-500"
                        : "text-primary-900"
                    }`}
                  >
                    {languageTranslate(language, "newPasswordLabel")}
                  </Label>
                  <InputGroup className={getInputGroupClass("newPassword")}>
                    <InputGroupInput
                      type={showNewPassword ? "text" : "password"}
                      placeholder={languageTranslate(
                        language,
                        "enterNewPassword",
                      )}
                      className={`${
                        errors.newPassword
                          ? "text-destructive-900 placeholder:text-destructive-400"
                          : "text-neutral-900"
                      }`}
                      {...register("newPassword")}
                      disabled={loading}
                    />
                    <InputGroupAddon>
                      <Lock
                        size={24}
                        className={`${
                          errors.newPassword
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
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        disabled={loading}
                      >
                        {showNewPassword ? (
                          <Eye
                            className={`${
                              errors.newPassword
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        ) : (
                          <EyeOff
                            className={`${
                              errors.newPassword
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        )}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.newPassword && (
                    <p className="custom-text-sm text-destructive-500 mt-1">
                      {errors.newPassword.message === "Password is required"
                        ? languageTranslate(language, "passwordRequired")
                        : errors.newPassword.message ===
                            "Password must be at least 8 characters"
                          ? languageTranslate(language, "passwordMinLengthMsg")
                          : errors.newPassword.message ===
                              "Password must contain at least one number"
                            ? languageTranslate(
                                language,
                                "passwordRequireNumber",
                              )
                            : errors.newPassword.message ===
                                "Password must contain at least one uppercase letter"
                              ? languageTranslate(
                                  language,
                                  "passwordRequireUppercase",
                                )
                              : errors.newPassword.message ===
                                  "Password must contain at least one lowercase letter"
                                ? languageTranslate(
                                    language,
                                    "passwordRequireLowercase",
                                  )
                                : errors.newPassword.message ===
                                    "Password must contain at least one special character"
                                  ? languageTranslate(
                                      language,
                                      "passwordRequireSpecial",
                                    )
                                  : errors.newPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex flex-col gap-1">
                  <Label
                    className={`font-medium text-base leading-none tracking-wide align-middle uppercase ${
                      errors.confirmPassword
                        ? "text-destructive-500"
                        : "text-primary-900"
                    }`}
                  >
                    {languageTranslate(language, "confirmPasswordLabel")}
                  </Label>
                  <InputGroup className={getInputGroupClass("confirmPassword")}>
                    <InputGroupInput
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder={languageTranslate(
                        language,
                        "confirmYourPassword",
                      )}
                      className={`${
                        errors.confirmPassword
                          ? "text-destructive-900 placeholder:text-destructive-400"
                          : "text-neutral-900"
                      }`}
                      {...register("confirmPassword")}
                      disabled={loading}
                    />
                    <InputGroupAddon>
                      <Lock
                        size={24}
                        className={`${
                          errors.confirmPassword
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
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        disabled={loading}
                      >
                        {showConfirmPassword ? (
                          <Eye
                            className={`${
                              errors.confirmPassword
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        ) : (
                          <EyeOff
                            className={`${
                              errors.confirmPassword
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        )}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  {errors.confirmPassword && (
                    <p className="custom-text-sm text-destructive-500 mt-1">
                      {errors.confirmPassword.message ===
                      "Please confirm your password"
                        ? languageTranslate(language, "confirmPasswordRequired")
                        : errors.confirmPassword.message ===
                            "Passwords do not match"
                          ? languageTranslate(language, "passwordsMismatch")
                          : errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Password requirements list */}
              <div
                className={`w-full flex flex-col rounded-[6px] pr-2 pl-2.5 py-2 gap-1 ${
                  isFormFilled && isPasswordValid && doPasswordsMatch
                    ? "bg-success-50"
                    : "bg-neutral-100"
                }`}
              >
                <div className="w-full flex gap-2 items-center">
                  {hasMinLength ? (
                    <Check className="text-success-900" size={16} />
                  ) : (
                    <X className="text-neutral-400" size={16} />
                  )}
                  <span
                    className={`font-bold custom-text-xs leading-[1.55] tracking-normal ${
                      hasMinLength ? "text-success-900" : "text-neutral-600"
                    }`}
                  >
                    {languageTranslate(language, "minLength")}
                  </span>
                </div>
                <div className="w-full flex gap-2 items-center">
                  {hasNumber ? (
                    <Check className="text-success-900" size={16} />
                  ) : (
                    <X className="text-neutral-400" size={16} />
                  )}
                  <span
                    className={`font-bold custom-text-xs leading-[1.55] tracking-normal ${
                      hasNumber ? "text-success-900" : "text-neutral-600"
                    }`}
                  >
                    {languageTranslate(language, "atLeastOneNumber")}
                  </span>
                </div>
                <div className="w-full flex gap-2 items-center">
                  {hasUpperCase && hasLowerCase ? (
                    <Check className="text-success-900" size={16} />
                  ) : (
                    <X className="text-neutral-400" size={16} />
                  )}
                  <span
                    className={`font-bold text-xs leading-[1.55] tracking-normal ${
                      hasUpperCase && hasLowerCase
                        ? "text-success-900"
                        : "text-neutral-600"
                    }`}
                  >
                    {languageTranslate(language, "upperLowerCase")}
                  </span>
                </div>
                <div className="w-full flex gap-2 items-center">
                  {hasSpecialChar ? (
                    <Check className="text-success-900" size={16} />
                  ) : (
                    <X className="text-neutral-400" size={16} />
                  )}
                  <span
                    className={`font-bold text-xs leading-[1.55] tracking-normal ${
                      hasSpecialChar ? "text-success-900" : "text-neutral-600"
                    }`}
                  >
                    {languageTranslate(language, "specialCharacter")}
                  </span>
                </div>

                {/* Password match indicator */}
                {confirmPassword?.length > 0 && (
                  <div className="w-full flex gap-2 items-center mt-1 pt-1 border-t border-neutral-200">
                    {doPasswordsMatch ? (
                      <>
                        <Check className="text-success-900" size={16} />
                        <span className="font-bold text-xs leading-[1.55] tracking-normal text-success-900">
                          {languageTranslate(language, "passwordsMatch")}
                        </span>
                      </>
                    ) : (
                      <>
                        <X className="text-destructive-500" size={16} />
                        <span className="font-normal text-xs leading-[1.55] tracking-normal text-destructive-500">
                          {languageTranslate(language, "passwordsDoNotMatch")}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button
                type="submit"
                className={`rounded-full gap-1 py-0.5 px-1.5 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)] font-normal text-base leading-none tracking-normal text-center ${
                  isFormFilled &&
                  isPasswordValid &&
                  doPasswordsMatch &&
                  !loading
                    ? "bg-primary-700 hover:bg-primary-900 text-neutral-50 cursor-pointer"
                    : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                }`}
                disabled={
                  !isFormFilled ||
                  !isPasswordValid ||
                  !doPasswordsMatch ||
                  loading
                }
              >
                {loading
                  ? languageTranslate(language, "resetting")
                  : languageTranslate(language, "resetPassword")}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="rounded-full gap-1 py-0.5 px-1.5 font-normal text-base leading-none tracking-normal text-center text-primary-700 hover:text-primary-900 transition-colors"
                onClick={handleReturnToLogin}
                disabled={loading}
              >
                {languageTranslate(language, "returnToLogin")}
              </Button>
            </div>
          </form>
        ) : (
          // Success Modal View
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col">
              <h1 className="text-primary-900 font-medium custom-text-4xl leading-[125%] tracking-tight text-center capitalize">
                {languageTranslate(language, "passwordChanged")}
              </h1>
              <h4 className="text-neutral-500 text-[16px] font-normal text-base leading-[1.5] tracking-tight text-center mt-4">
                {languageTranslate(language, "passwordChangedSuccess")}
              </h4>
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button
                type="button"
                className="rounded-full gap-1 py-0.5 px-1.5 bg-primary-700 hover:bg-primary-900 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)] font-normal text-base leading-none tracking-normal text-center text-neutral-50"
                onClick={handleReturnToLogin}
              >
                {languageTranslate(language, "returnToLogin")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePassword;
