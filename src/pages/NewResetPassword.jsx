import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MyLayout from "@/InternalComponents/MyLayout";
import Danger from "@/InternalComponents/common/Alert/Danger";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import apiRequest from "@/utils/request";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import ServerError from "@/InternalComponents/common/ServerError";

// Define the validation schema
const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

const NewResetPassword = () => {
  const navigate = useNavigate();
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [apiError, setApiError] = useState({ status: false, content: {} });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const language = useAppStore((state) => state.language);
  const [serverError, setServerError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const email = watch("email");

  // Check if email field is filled
  const isFormFilled = email?.length > 0;

  // Helper function to get input group classes based on errors
  const getInputGroupClass = () => {
    const hasError = errors.email;
    const baseClass = "border-0.5 rounded-lg h-12";

    if (hasError) {
      return `${baseClass} border-destructive-300 bg-destructive-50`;
    }
    if (email?.length > 0) {
      return `${baseClass} border-primary-500 bg-neutral-50`;
    }
    return `${baseClass} border-primary-200 bg-neutral-50`;
  };

  const onSubmit = async (data) => {
    setSubmitAttempted(true);
    setApiError({ status: false, content: {} });

    // Manually trigger validation
    const isValid = await trigger();
    if (!isValid) {
      setSubmitAttempted(false);
      return;
    }

    try {
      await apiRequest
        .post(
          "/user_api/forgot_pswd",
          {
            email: data.email,
          },
          {
            headers: {
              GET_FGTPSWD_API: import.meta.env.VITE_APP_GET_FGTPSWD_API,
            },
          },
        )
        .then((response) => {
          setSubmitAttempted(false);
          setSubmittedEmail(data.email);
          setShowSuccessModal(true);
          toast.success(response?.data?.[`Message_${language}`]);
        })
        .catch((error) => {
          setSubmitAttempted(false);

          if (error?.response?.status === 500) {
            setServerError(true);
            return;
          }

          const errorMessage =
            error?.response?.data?.[`Message_${language}`] ||
            languageTranslate(language, "resetPasswordFailed");
          toast.error(errorMessage);
          setApiError({
            status: true,
            content: { message: errorMessage },
          });
        });
    } catch {
      setServerError(true);
      return;
    }
  };
  if (serverError) return <ServerError />;
  return (
    <MyLayout>
      <div className="w-full flex flex-col h-full">
        <div className="w-full flex flex-col rounded-xl p-5 gap-2.5 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)]">
          {!showSuccessModal ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-10"
            >
              <div className="w-full flex flex-col gap-10">
                {/* Show API error message */}
                {apiError?.status && (
                  <Danger message={apiError.content.message} />
                )}

                <div className="w-full flex flex-col">
                  <h1 className="text-primary-900 font-medium text-4xl leading-[125%] tracking-tight text-center capitalize">
                    {languageTranslate(language, "resetPasswordTitle")}
                  </h1>
                  <h4 className="text-neutral-500 text-[16px] font-normal text-base leading-[1.5] tracking-tight text-center">
                    {languageTranslate(language, "restoreAccessSubtitle")}
                  </h4>
                </div>

                <div className="w-full flex flex-col gap-6">
                  <div className="w-full flex flex-col gap-3">
                    <div className="w-full flex flex-col gap-1">
                      <Label
                        className={`font-medium text-base leading-none tracking-wide align-middle uppercase ${
                          errors.email
                            ? "text-destructive-500"
                            : "text-primary-900"
                        }`}
                      >
                        {languageTranslate(language, "emailLabel")}
                      </Label>
                      <InputGroup className={getInputGroupClass()}>
                        <InputGroupInput
                          type="email"
                          placeholder={languageTranslate(
                            language,
                            "enterEmailPlaceholder",
                          )}
                          className={`${
                            errors.email
                              ? "text-destructive-900 placeholder:text-destructive-400"
                              : "text-neutral-900"
                          }`}
                          {...register("email")}
                        />
                        <InputGroupAddon>
                          <MailIcon
                            size={24}
                            className={`${
                              errors.email
                                ? "text-destructive-500"
                                : "text-neutral-400"
                            }`}
                          />
                        </InputGroupAddon>
                      </InputGroup>
                      {errors.email && (
                        <p className="text-sm text-destructive-500 mt-1">
                          {errors.email.message === "Email is required"
                            ? languageTranslate(language, "emailRequired")
                            : languageTranslate(language, "validEmail")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <Button
                  type="submit"
                  className={`rounded-full gap-1 py-0.5 px-1.5 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)] font-normal text-base leading-none tracking-normal text-center ${
                    isFormFilled && !isSubmitting && !submitAttempted
                      ? "bg-primary-700 hover:bg-primary-900 text-neutral-50 cursor-pointer"
                      : "bg-neutral-100 text-neutral-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormFilled || isSubmitting || submitAttempted}
                >
                  {isSubmitting
                    ? languageTranslate(language, "sendingButton")
                    : languageTranslate(language, "resetPasswordButton")}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-full gap-1 py-0.5 px-1.5 font-normal text-base leading-none tracking-normal text-center text-primary-700 hover:text-primary-900 transition-colors"
                  onClick={() => navigate("/login")}
                >
                  {languageTranslate(language, "returnToLogin")}
                </Button>
              </div>
            </form>
          ) : (
            // Success Message View
            <div className="w-full flex flex-col gap-10">
              <div className="w-full flex flex-col">
                <h1 className="text-primary-900 font-medium text-4xl leading-[125%] tracking-tight text-center capitalize">
                  {languageTranslate(language, "resetPasswordTitle")}
                </h1>
                <h4 className="text-neutral-500 text-[16px] font-normal text-base leading-[1.5] tracking-tight text-center">
                  {languageTranslate(language, "restoreAccessSubtitle")}
                </h4>
                {/* Success message under the title */}

                <div className="w-full flex flex-col gap-7.5 mt-8">
                  <h4 className="text-neutral-600 text-[16px] font-normal leading-[1.5] tracking-tight text-center">
                    {(() => {
                      const message = languageTranslate(
                        language,
                        "successThanksMessage",
                      );
                      const parts = message.split("{email}");
                      return (
                        <>
                          {parts[0]}
                          <span className="font-semibold text-primary-700">
                            {submittedEmail}
                          </span>
                          {parts[1]}
                        </>
                      );
                    })()}
                  </h4>

                  <h4 className="text-neutral-600 text-[16px] font-normal leading-[1.5] tracking-tight text-center">
                    {languageTranslate(language, "successSpamMessage")}
                  </h4>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <Button
                  type="button"
                  className="rounded-full gap-1 py-0.5 px-1.5 bg-primary-700 hover:bg-primary-900 shadow-[0_1px_2px_0px_rgba(16,24,40,0.04)] font-normal text-base leading-none tracking-normal text-center text-neutral-50"
                  onClick={() => {
                    setShowSuccessModal(false);
                    reset();
                  }}
                >
                  {languageTranslate(language, "tryAnotherEmail")}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-full gap-1 py-0.5 px-1.5 font-normal text-base leading-none tracking-normal text-center text-primary-700 hover:text-primary-900 transition-colors"
                  onClick={() => navigate("/login")}
                >
                  {languageTranslate(language, "returnToLogin")}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MyLayout>
  );
};

export default NewResetPassword;
