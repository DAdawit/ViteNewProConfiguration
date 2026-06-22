import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../utils/request";
import { AlertCircle, Mail } from "lucide-react";
import { languageTranslate } from "../utils/data";
import MyLayout from "@/InternalComponents/MyLayout";
import ServerError from "@/InternalComponents/common/ServerError";
import useAppStore from "@/Store/useAppStore";

const MAX_ATTEMPTS = 5;
const BLOCK_DURATION = 2 * 60 * 1000;
const BLOCK_STORAGE_KEY = "cpms_login_block_until";

export function ForgotPassword() {
  const navigate = useNavigate();
  const language = useAppStore((state) => state.language);
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState("empty");
  const [emailFocused, setEmailFocused] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [rateLimitTimer, setRateLimitTimer] = useState(null);
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isEmailSended, setIsEmailSended] = useState(false);
  const [error, setError] = useState({
    status: false,
    content: {},
  });

  useEffect(() => {
    if (!blockTimeRemaining || blockTimeRemaining <= 0) return;

    const interval = setInterval(() => {
      setBlockTimeRemaining((prev) => {
        if (!prev || prev <= 1000) {
          localStorage.removeItem(BLOCK_STORAGE_KEY);
          setFailedAttempts(0);
          setEmail("");
          setError({
            status: false,
            content: {},
          });
          return null;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [blockTimeRemaining]);

  useEffect(() => {
    const blockUntil = localStorage.getItem(BLOCK_STORAGE_KEY);
    if (blockUntil) {
      const remaining = parseInt(blockUntil) - Date.now();
      if (remaining > 0) {
        setRateLimitTimer(remaining);
        setFailedAttempts(MAX_ATTEMPTS);
      } else {
        localStorage.removeItem(BLOCK_STORAGE_KEY);
        setFailedAttempts(0);
      }
    }
  }, []);

  useEffect(() => {
    if (!rateLimitTimer || rateLimitTimer <= 0) return;

    const timer = setInterval(() => {
      setRateLimitTimer((prev) => {
        if (prev <= 1000) {
          localStorage.removeItem(BLOCK_STORAGE_KEY);
          clearInterval(timer);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [rateLimitTimer]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && email && isValidEmail(email) && !loading) {
      handleResetPassword(e);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleResetPassword = async () => {
    if (email && isValidEmail(email)) {
      setFormState("waiting");
      setCountdown(30);

      if (rateLimitTimer && rateLimitTimer > 0) {
        setError({
          status: true,
          content: {
            [`Message_${language}`]: languageTranslate(
              language,
              "tooManyAttempts",
            ),
          },
        });
        return;
      }

      try {
        setLoading(true);
        await apiRequest
          .post(
            "/user_api/forgot_pswd",
            { email: email },
            {
              headers: {
                "Content-Type": "application/json",
                GET_FGTPSWD_API: import.meta.env.VITE_APP_GET_FGTPSWD_API,
              },
            },
          )
          .then(() => {
            setEmail("");
            setFailedAttempts(0);
            localStorage.removeItem(BLOCK_STORAGE_KEY);
            setIsEmailSended(true);
            setTimeout(() => {
              setLoading(false);
            }, 6000);
          })
          .catch((error) => {
            setEmail("");
            setLoading(false);

            if (error?.response?.status === 500) {
              setServerError(true);
              return;
            }

            const attempts = failedAttempts + 1;
            setFailedAttempts(attempts);

            if (attempts >= MAX_ATTEMPTS) {
              const blockUntil = Date.now() + BLOCK_DURATION;
              localStorage.setItem(BLOCK_STORAGE_KEY, blockUntil.toString());
              setRateLimitTimer(BLOCK_DURATION);
              setError({
                status: true,
                content: {
                  [`Message_${language}`]: languageTranslate(
                    language,
                    "tooManyAttempts",
                  ),
                },
              });
            } else {
              setError({
                status: true,
                content: error?.response?.data || {
                  [`Message_${language}`]: languageTranslate(
                    language,
                    "forgotPasswordError",
                  ),
                },
              });
            }
          });
      } catch {
        setServerError(true);
      }
    }
  };

  const handleResend = () => {
    if (countdown === 0) {
      setCountdown(30);
      handleResetPassword();
    }
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    if (formState === "waiting") setFormState("active");
  };

  const isFormFilled = email.length > 0 && isValidEmail(email);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const formatCountdown = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (serverError) return <ServerError />;

  return (
    <MyLayout>
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-5 items-center min-w-70 relative shrink-0 w-105">
          <div
            className={`box-border bg-white dark:bg-black content-stretch flex flex-col gap-2.5 items-start p-8 relative rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] shrink-0`}
          >
            {error?.status && countdown > 0 && (
              <div
                className={`box-border bg-destructive-50 content-stretch flex gap-2 items-center overflow-clip pl-2.5 pr-2 py-2 relative rounded-md shrink-0 w-full`}
              >
                <div className="basis-0 content-stretch flex gap-2 grow items-center min-h-px min-w-px relative shrink-0">
                  <div className="relative shrink-0 size-5 sm:size-5.5 md:size-6">
                    <AlertCircle
                      className="size-full"
                      stroke="#EF4444"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                    <p
                      className={`leading-[1.55] not-italic relative shrink-0 text-neutral-900 text-[12px] sm:text-[13px] md:text-[14px] whitespace-normal`}
                    >
                      {error?.content?.[`Message_${language}`]}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="content-stretch flex flex-col gap-10 items-center relative shrink-0 w-89">
              <div className="content-stretch flex flex-col gap-10 items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-2 items-center not-italic relative shrink-0 w-full">
                  <p
                    className={`text-primary-900 leading-6.5 relative shrink-0 text-[20px] ${
                      formState === "waiting" ? "text-nowrap" : ""
                    } tracking-[-0.6538px] ${
                      formState === "waiting" ? "whitespace-pre" : ""
                    }`}
                  >
                    {languageTranslate(language, "resetPassword")}
                  </p>

                  {isEmailSended ? (
                    <div className="text-center">
                      <p className="leading-[normal] text-justify min-w-full relative shrink-0 text-[14px] text-neutral-500 w-min">
                        {language === "en"
                          ? languageTranslate(
                              language,
                              "passwordResetMessage1",
                            ).replace("{email}", email)
                          : languageTranslate(
                              language,
                              "passwordResetMessage1",
                            ).replace("{email}", email)}
                        <br aria-hidden="true" /> *
                        <br aria-hidden="true" />
                        {languageTranslate(language, "passwordResetMessage2")}
                      </p>
                    </div>
                  ) : (
                    <p className="leading-5.25 relative shrink-0 text-[14px] text-center text-neutral-500 text-nowrap tracking-[-0.4577px] whitespace-pre">
                      {languageTranslate(language, "restoreAccess")}
                    </p>
                  )}
                </div>

                <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
                    <div
                      className={`flex flex-col text-primary-900 justify-center leading-0 not-italic relative shrink-0 text-[14px] tracking-[1.75px] uppercase w-full`}
                    >
                      <p className="leading-5.5">
                        {languageTranslate(language, "emailOnly")}
                      </p>
                    </div>
                    <div
                      className={`${
                        isFormFilled ? "bg-neutral-50" : "bg-neutral-100"
                      } relative rounded-md shrink-0 w-full`}
                    >
                      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                        <div className="box-border content-stretch flex gap-3 items-center px-3 py-2.5 relative w-full">
                          <div className="basis-0 content-stretch flex gap-3 grow items-center min-h-px min-w-px relative shrink-0">
                            <div className="relative shrink-0 size-6">
                              <Mail
                                className={`${
                                  isFormFilled
                                    ? "text-neutral-500"
                                    : "text-neutral-200"
                                }`}
                              />
                            </div>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) =>
                                handleEmailChange(e.target.value)
                              }
                              placeholder={languageTranslate(
                                language,
                                "enterYourEmail",
                              )}
                              className={`flex-1 bg-transparent border-none outline-none text-neutral-900 text-[14px] tracking-[-0.4577px] placeholder:text-neutral-400`}
                              onFocus={() => setEmailFocused(true)}
                              onBlur={() => setEmailFocused(false)}
                              disabled={
                                formState === "waiting" && countdown > 0
                              }
                              onKeyDown={handleKeyDown}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className={`absolute ${
                          emailFocused
                            ? "border-primary-500"
                            : isFormFilled
                              ? "border-neutral-200"
                              : "border-primary-50"
                        } border border-solid inset-0 pointer-events-none rounded-md`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full">
                {blockTimeRemaining > 0 ? (
                  <div className="text-sm w-full text-center flex justify-center items-center text-destructive-500 font-semibold">
                    <span>
                      {language === "en"
                        ? languageTranslate(language, "blockedMessage").replace(
                            "{time}",
                            formatCountdown(blockTimeRemaining / 1000),
                          )
                        : languageTranslate(language, "blockedMessage").replace(
                            "{time}",
                            formatCountdown(blockTimeRemaining / 1000),
                          )}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={
                      formState === "waiting"
                        ? handleResend
                        : handleResetPassword
                    }
                    disabled={
                      loading && formState === "waiting"
                        ? countdown > 0
                        : !isFormFilled
                    }
                    className={`${
                      formState === "waiting"
                        ? countdown > 0
                          ? "bg-neutral-300 cursor-not-allowed"
                          : "bg-primary-500 hover:bg-primary-900 cursor-pointer"
                        : isFormFilled
                          ? "bg-primary-500 hover:bg-primary-900 cursor-pointer"
                          : "bg-neutral-300 cursor-not-allowed"
                    } relative rounded-sm shrink-0 w-full transition-colors`}
                  >
                    <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                      <div className="box-border content-stretch flex gap-1 items-center justify-center px-6 py-2 relative w-full">
                        <p
                          className={`leading-4 not-italic relative shrink-0 text-[14px] text-center ${
                            formState === "waiting"
                              ? countdown > 0
                                ? "text-neutral-600"
                                : "text-neutral-50"
                              : isFormFilled
                                ? "text-neutral-50"
                                : "text-neutral-600"
                          } text-nowrap tracking-[-0.4577px] whitespace-pre`}
                        >
                          {formState === "waiting"
                            ? countdown > 0
                              ? `${languageTranslate(language, "resend")} in ${formatCountdown(countdown)}`
                              : languageTranslate(language, "resend")
                            : languageTranslate(language, "resetPassword")}
                        </p>
                      </div>
                    </div>
                  </button>
                )}

                <button
                  onClick={() => navigate("/login")}
                  className="relative rounded-sm shrink-0 w-full transition-colors"
                >
                  <div className="cursor-pointer flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-1 items-center justify-center px-6 py-2 relative w-full">
                      <p className="leading-4 not-italic relative shrink-0 text-primary-500 text-[14px] text-center text-nowrap tracking-[-0.4577px] whitespace-pre hover:underline">
                        {languageTranslate(language, "returnToLogin")}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyLayout>
  );
}
