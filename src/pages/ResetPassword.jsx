import { useEffect, useState } from "react";
import { Eye, EyeOff, Check, X, Trophy } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import apiRequest from "../utils/request";
import { languageTranslate } from "../utils/data";
import { language } from "@/utils/language";
import MyLayout from "@/InternalComponents/MyLayout";
import ServerError from "@/InternalComponents/common/ServerError";

const MAX_ATTEMPTS = 5;
const BLOCK_DURATION = 2 * 60 * 1000;
const BLOCK_STORAGE_KEY = "cpms_resetpwd_block_until";

export function ResetPassword() {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const appState = {
    language: "en",
  };
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPasswordFocused, setNewPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [rateLimitTimer, setRateLimitTimer] = useState(null);
  const [blockTimeRemaining, setBlockTimeRemaining] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
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
          setNewPassword("");
          setConfirmPassword("");
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
    const stored = localStorage.getItem(BLOCK_STORAGE_KEY);
    if (stored) {
      const remaining = Number(stored) - Date.now();
      if (remaining > 0) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRateLimitTimer(remaining);
        setFailedAttempts(MAX_ATTEMPTS);
      } else {
        localStorage.removeItem(BLOCK_STORAGE_KEY);
      }
    }
  }, []);
  useEffect(() => {
    if (!rateLimitTimer || rateLimitTimer <= 0) return;

    const interval = setInterval(() => {
      setRateLimitTimer((prev) => {
        if (!prev || prev <= 1000) {
          localStorage.removeItem(BLOCK_STORAGE_KEY);
          setFailedAttempts(0);
          return null;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [rateLimitTimer]);

  const validatePassword = (password) => {
    return {
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const validation = validatePassword(newPassword);
  const allRulesPassed =
    validation.minLength && validation.hasNumber && validation.hasSpecialChar;
  const passwordsMatch =
    newPassword === confirmPassword && confirmPassword.length > 0;
  const passwordsDontMatch =
    confirmPassword.length > 0 && !newPassword.startsWith(confirmPassword);
  const isFormValid = allRulesPassed && passwordsMatch;

  const showValidationRules = newPassword.length > 0;

  const handleResetPassword = async () => {
    if (isFormValid) {
      try {
        setLoading(true);
        await apiRequest
          .post(
            `/user_api/reset_pswd/${id}/${token}`,
            { password: newPassword },
            {
              headers: {
                GET_RSTPSWD_API: import.meta.env.VITE_APP_GET_RSTPSWD_API,
              },
            },
          )
          .then(() => {
            setShowSuccessModal(true);
            localStorage.removeItem(BLOCK_STORAGE_KEY);
            setFailedAttempts(0);
            setRateLimitTimer(null);
            setTimeout(() => navigate("/login"), 1500);
          })
          .catch((error) => {
            const attempts = failedAttempts + 1;
            setFailedAttempts(attempts);

            if (error?.response?.status === 500) setServerError(true);
            if (error?.response?.status === 429) {
              setRateLimitTimer(180_000);
            }

            if (attempts >= MAX_ATTEMPTS) {
              const blockUntil = Date.now() + BLOCK_DURATION;
              localStorage.setItem(BLOCK_STORAGE_KEY, blockUntil.toString());
              setRateLimitTimer(BLOCK_DURATION);
              setError({
                status: true,
                content: {
                  Message_en: language?.toManyLoginAttempts[0],
                  Message_am: language?.toManyLoginAttempts[1],
                  Message_or: language?.toManyLoginAttempts[2],
                  Message_ti: language?.toManyLoginAttempts[3],
                  Message_so: language?.toManyLoginAttempts[4],
                  Message_aa: language?.toManyLoginAttempts[5],
                },
              });
            } else {
              setError({
                status: true,
                content: error?.response?.data || {
                  Message_en: language.resetError[0],
                  Message_am: language.resetError[1],
                  Message_or: language.resetError[2],
                  Message_ti: language.resetError[3],
                  Message_so: language.resetError[4],
                  Message_aa: language.resetError[5],
                },
              });
            }
          });
      } catch {
        setServerError(true);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && isFormValid && !loading) {
      handleResetPassword(e);
    }
  };

  const isNewPasswordFilled = newPassword.length > 0;
  const isConfirmPasswordFilled = confirmPassword.length > 0;

  if (serverError) return <ServerError />;
  return (
    <MyLayout>
      <div className="content-stretch flex flex-col gap-4 sm:gap-5 items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-6 sm:gap-8 md:gap-10 items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-2 items-center not-italic relative shrink-0 text-nowrap w-full whitespace-pre">
            <p
              className={` leading-[1.3] relative shrink-0 text-primary-900 text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] tracking-[-0.6538px]`}
            >
              {languageTranslate(appState.language, "createNewPassword")}
            </p>
            <p className=" leading-normal relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-center text-neutral-500 tracking-[-0.4577px]">
              {languageTranslate(appState.language, "restoreAccess")}
            </p>
          </div>
          <div className="content-stretch flex flex-col gap-4 sm:gap-5 items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-2 sm:gap-3 items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
                <div
                  className={`flex flex-col  justify-center leading-0 not-italic relative shrink-0 text-primary-900 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] tracking-[1.75px] uppercase w-full`}
                >
                  <p className="leading-normal">
                    {" "}
                    {languageTranslate(appState.language, "newPassword")}*
                  </p>
                </div>
                <div
                  className={`${
                    isNewPasswordFilled ? "bg-neutral-50" : "bg-neutral-100"
                  } relative rounded-md shrink-0 w-full`}
                >
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-2 sm:gap-3 items-center px-2 sm:px-3 py-2 sm:py-2.5 relative w-full">
                      <div className="basis-0 content-stretch flex gap-2 sm:gap-3 grow items-center min-h-px min-w-px relative shrink-0">
                        <div className="relative shrink-0 size-5 sm:size-5.5 md:size-6">
                          {/* TODO: use lock icon from lucide and input group shadcn/ui */}
                        </div>
                        <input
                          type={showNewPassword ? "text" : "password"}
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder={languageTranslate(
                            appState.language,
                            "enterYourPassword",
                          )}
                          className={`flex-1 bg-transparent border-none outline-none text-neutral-900  text-[12px] sm:text-[13px] md:text-[14px] tracking-[-0.4577px] placeholder:text-neutral-400`}
                          onFocus={() => setNewPasswordFocused(true)}
                          onBlur={() => setNewPasswordFocused(false)}
                          onKeyDown={handleKeyDown}
                        />
                      </div>
                      <button
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="relative shrink-0 size-5 sm:size-5.5 md:size-6"
                      >
                        {showNewPassword ? (
                          <EyeOff
                            className={`size-full ${
                              isNewPasswordFilled
                                ? "text-neutral-900"
                                : "text-neutral-400"
                            }`}
                          />
                        ) : (
                          <Eye
                            className={`size-full ${
                              isNewPasswordFilled
                                ? "text-neutral-900"
                                : "text-neutral-400"
                            }`}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className={`absolute ${
                      newPasswordFocused
                        ? "border-primary-500"
                        : isNewPasswordFilled
                          ? "border-neutral-200"
                          : "border-primary-50"
                    } border border-solid inset-0 pointer-events-none rounded-md`}
                  />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-2 sm:gap-3 items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full">
                <div
                  className={`flex flex-col  justify-center text-primary-900 leading-0 not-italic relative shrink-0  text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] tracking-[1.75px] uppercase w-full`}
                >
                  <p className="leading-normal">
                    {languageTranslate(appState.language, "confirmPassword")} *
                  </p>
                </div>
                <div
                  className={`${
                    isConfirmPasswordFilled ? "bg-neutral-50" : "bg-neutral-100"
                  } relative rounded-md shrink-0 w-full`}
                >
                  <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                    <div className="box-border content-stretch flex gap-2 sm:gap-3 items-center px-2 sm:px-3 py-2 sm:py-2.5 relative w-full">
                      <div className="basis-0 content-stretch flex gap-2 sm:gap-3 grow items-center min-h-px min-w-px relative shrink-0">
                        <div className="relative shrink-0 size-5 sm:size-5.5 md:size-6">
                          {/* TODO: use lock icon from lucide and input group shadcn/ui */}
                        </div>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder={languageTranslate(
                            appState.language,
                            "enterYourPassword",
                          )}
                          className={`flex-1 bg-transparent border-none outline-none text-neutral-900  text-[12px] sm:text-[13px] md:text-[14px] tracking-[-0.4577px] placeholder:text-neutral-400`}
                          onFocus={() => setConfirmPasswordFocused(true)}
                          onBlur={() => setConfirmPasswordFocused(false)}
                          onKeyDown={handleKeyDown}
                        />
                      </div>
                      <button
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="relative shrink-0 size-5 sm:size-5.5 md:size-6"
                      >
                        {showConfirmPassword ? (
                          <EyeOff
                            className={`size-full ${
                              isConfirmPasswordFilled
                                ? "text-neutral-900"
                                : "text-neutral-400"
                            }`}
                          />
                        ) : (
                          <Eye
                            className={`size-full ${
                              isConfirmPasswordFilled
                                ? "text-neutral-900"
                                : "text-neutral-400"
                            }`}
                          />
                        )}
                      </button>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className={`absolute ${
                      confirmPasswordFocused
                        ? "border-primary-500"
                        : isConfirmPasswordFilled
                          ? "border-neutral-200"
                          : "border-primary-50"
                    } border border-solid inset-0 pointer-events-none rounded-md`}
                  />
                </div>
              </div>
              {passwordsDontMatch && (
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                  <div className="basis-0 content-stretch flex gap-2.5 grow items-center min-h-px min-w-px relative shrink-0">
                    <div className="flex flex-col  justify-center leading-0 not-italic relative shrink-0 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-nowrap text-red-500 tracking-[-0.4577px]">
                      <p className="leading-normal whitespace-pre">
                        {languageTranslate(
                          appState.language,
                          "passwordDontMatch",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showValidationRules && (
              <div
                className={`${
                  allRulesPassed ? "bg-success-50" : "bg-neutral-100"
                } relative rounded-md shrink-0 w-full`}
              >
                <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-center pl-2 sm:pl-2.5 pr-2 py-2 relative w-full">
                    <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-5 sm:size-5.5 md:size-6">
                        {validation.minLength ? (
                          <Check
                            className={`size-full ${
                              allRulesPassed
                                ? "text-success-700"
                                : "text-success-900"
                            }`}
                          />
                        ) : (
                          <X className={`size-full text-neutral-900`} />
                        )}
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <p
                            className={` leading-[1.55] not-italic relative shrink-0 text-[10px] sm:text-[11px] md:text-[12px] ${
                              validation.minLength
                                ? allRulesPassed
                                  ? "text-success-700"
                                  : "text-success-900"
                                : "text-neutral-900"
                            } w-full`}
                          >
                            {languageTranslate(
                              appState.language,
                              "minimumEight",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-5 sm:size-5.5 md:size-6">
                        {validation.hasNumber ? (
                          <Check
                            className={`size-full ${
                              allRulesPassed
                                ? "text-success-700"
                                : "text-success-900"
                            }`}
                          />
                        ) : (
                          <X className={`size-full text-neutral-900`} />
                        )}
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <p
                            className={` leading-[1.55] not-italic relative shrink-0 text-[10px] sm:text-[11px] md:text-[12px] ${
                              validation.hasNumber
                                ? allRulesPassed
                                  ? "text-success-700"
                                  : "text-success-900"
                                : "text-neutral-900"
                            } w-full`}
                          >
                            {languageTranslate(
                              appState.language,
                              "atLeastOneNumber",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-2 items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-5 sm:size-5.5 md:size-6">
                        {validation.hasSpecialChar ? (
                          <Check
                            className={`size-full ${
                              allRulesPassed
                                ? "text-success-700"
                                : "text-success-900"
                            }`}
                          />
                        ) : (
                          <X className={`size-full text-neutral-900`} />
                        )}
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-2.5 grow items-start min-h-px min-w-px relative shrink-0">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                          <p
                            className={` leading-[1.55] not-italic relative shrink-0 text-[10px] sm:text-[11px] md:text-[12px] ${
                              validation.minLength
                                ? allRulesPassed
                                  ? "text-success-700"
                                  : "text-success-900"
                                : "text-neutral-900"
                            } w-full`}
                          >
                            {languageTranslate(
                              appState.language,
                              "specialCharacters",
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-2 sm:gap-3 items-start relative shrink-0 w-full">
        {blockTimeRemaining > 0 ? (
          <div className="text-sm  w-full text-center flex justify-center items-center text-destructive-500 font-semibold">
            <span>
              {appState.language === "en" &&
                language?.blockedMessage(blockTimeRemaining)[0]}
              {appState.language === "am" &&
                language?.blockedMessage(blockTimeRemaining)[1]}
              {appState.language === "or" &&
                language?.blockedMessage(blockTimeRemaining)[2]}
              {appState.language === "ti" &&
                language?.blockedMessage(blockTimeRemaining)[3]}
              {appState.language === "so" &&
                language?.blockedMessage(blockTimeRemaining)[4]}
              {appState.language === "aa" &&
                language?.blockedMessage(blockTimeRemaining)[5]}
            </span>
          </div>
        ) : (
          <button
            onClick={handleResetPassword}
            disabled={!isFormValid || loading}
            className={`${
              isFormValid
                ? "bg-primary-500 hover:bg-primary-900 cursor-pointer"
                : "bg-neutral-100 cursor-not-allowed"
            } relative rounded-sm shrink-0 w-full transition-colors min-h-11`}
          >
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex gap-1 items-center justify-center px-4 sm:px-5 md:px-6 py-2 relative w-full">
                <p
                  className={` leading-4 not-italic relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] text-center ${
                    isFormValid ? "text-neutral-50" : "text-neutral-600"
                  } text-nowrap tracking-[-0.4577px] whitespace-pre`}
                >
                  {languageTranslate(appState.language, "resetPassword")}
                </p>
              </div>
            </div>
          </button>
        )}

        <button
          onClick={() => navigate("/login")}
          className={`relative rounded-sm shrink-0 w-full transition-colors cursor-pointer`}
        >
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="box-border content-stretch flex gap-1 items-center justify-center px-4 sm:px-5 md:px-6 py-2 relative w-full">
              <p className=" leading-4 not-italic relative shrink-0 text-primary-500 text-[12px] sm:text-[13px] md:text-[14px] text-center text-nowrap tracking-[-0.4577px] whitespace-pre hover:underline">
                {languageTranslate(appState.language, "returnToLogin")}
              </p>
            </div>
          </div>
        </button>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 backdrop-blur-[6px] backdrop-filter bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50 cursor-pointer p-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white dark:bg-black box-border content-stretch flex flex-col gap-2.5 items-start p-6 sm:p-8 md:p-10 relative rounded-[10px] shadow-[0px_0px_60px_0px_rgba(100,64,32,0.2)] cursor-default w-full max-w-[320px] sm:max-w-95 md:max-w-110`}
          >
            <div className="content-stretch flex flex-col gap-4 sm:gap-5 md:gap-6.5 items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-2 sm:gap-2.5 md:gap-3.25 items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex gap-2.5 items-center justify-center pb-0.5 pt-0 px-0 relative shrink-0">
                  <div className="bg-yellow-500 rounded-full p-3 sm:p-3.5 md:p-4">
                    <Trophy className="size-12 sm:size-13.5 md:size-15 text-white" />
                  </div>
                </div>

                <p
                  className={`capitalize  leading-[normal] not-italic relative shrink-0 text-primary-900 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center whitespace-pre`}
                >
                  {languageTranslate(
                    appState.language,
                    "passwordChangeSuccess",
                  )}
                </p>
                <p
                  className={` leading-[normal] ext-neutral-500 min-w-full not-italic relative shrink-0 text-[12px] sm:text-[13px] md:text-[14px] text-center w-min whitespace-pre-wrap`}
                >
                  {languageTranslate(
                    appState.language,
                    "passwordChangeSuccessMessage",
                  )}
                </p>
              </div>
              <button
                onClick={() => navigate("/login")}
                className={`bg-primary-500 box-border hover:bg-primary-900 content-stretch flex gap-1 items-center justify-center overflow-clip px-4 sm:px-5 md:px-6 py-2 relative rounded-sm shrink-0 w-full transition-colors min-h-11`}
              >
                <p
                  className={` leading-4 not-italic relative shrink-0 text-[12px] sm:text-[13px] text-neutral-50 md:text-[14px] text-center text-nowrap tracking-[-0.4577px] whitespace-pre`}
                >
                  {languageTranslate(appState.language, "returnToLogin")}
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </MyLayout>
  );
}

export default ResetPassword;
