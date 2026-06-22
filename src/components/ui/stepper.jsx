// components/ui/stepper.jsx
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useSelector } from "react-redux";

export const Stepper = ({ steps, currentStep, className }) => {
  const appState = useSelector((state) => state.app);

  return (
    <div className={cn("flex items-center justify-center w-full", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isStepCompleted = index <= currentStep;

        return (
          <div key={index} className="flex items-center">
            {/* Step Content */}
            <div className="flex flex-col items-center">
              {/* Step Circle */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-colors border-2",
                  isCompleted || isCurrent
                    ? "bg-primary-800 border-primary-800 text-white dark:text-black"
                    : "bg-white dark:bg-black border-neutral-300 text-neutral-600"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-bold">{index + 1}</span>
                )}
              </div>

              {/* Step Text */}
              <div className="mt-2 flex flex-col items-center">
                <span
                  className={cn(
                    "text-xs md:text-[16px] text-right text-neutral-500"
                  )}
                >
                  {/* {languageTranslate(appState.language, "title")} */}

                  {appState?.language === "en" && step?.title[0]}
                  {appState?.language === "am" && step?.title[1]}
                  {appState?.language === "or" && step?.title[2]}
                  {appState?.language === "ti" && step?.title[3]}
                  {appState?.language === "so" && step?.title[4]}
                  {appState?.language === "aa" && step?.title[5]}
                </span>
                <span
                  className={cn("text-sm whitespace-nowrap text-neutral-900")}
                >
                  {appState?.language === "en" && step?.description[0]}
                  {appState?.language === "am" && step?.description[1]}
                  {appState?.language === "or" && step?.description[2]}
                  {appState?.language === "ti" && step?.description[3]}
                  {appState?.language === "so" && step?.description[4]}
                  {appState?.language === "aa" && step?.description[5]}
                </span>
              </div>
            </div>

            {/* Connector (except for last step) */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "min-w-[300px] h-[2.5px] mx-2 transition-colors rounded-full",
                  isStepCompleted ? "bg-primary-800" : "bg-neutral-200"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
