import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { Check } from "lucide-react";
import React from "react";

const GenericStepper = ({ currentStep, steps }) => {
  const language = useAppStore((state) => state.language);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 sm:hidden">
        {steps?.map((step, index) => (
          <div key={step?.id} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shrink-0 ${
                  currentStep >= step?.id
                    ? "bg-primary-800 text-white dark:text-black"
                    : "bg-neutral-200 text-neutral-500"
                }`}
              >
                <Check className="w-5 h-5" />
              </div>
            </div>
            {index < steps?.length - 1 && (
              <div
                className={`w-0.5 hidden md:block flex-1 -mt-2 -mb-2 mx-auto ${
                  currentStep > step.id ? "bg-primary-800" : "bg-neutral-200"
                }`}
              />
            )}

            <div className="flex-1">
              <span
                className={`block text-sm font-medium ${
                  currentStep >= step.id
                    ? "text-primary-700"
                    : "text-neutral-500"
                }`}
              >
                <span className="uppercase text-xs">
                  {languageTranslate(language, "step")} {index + 1}
                </span>
                <span className="block mt-0.5">{step.label}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet & Desktop: Original horizontal layout (unchanged design) */}
      <div className="hidden sm:flex items-center gap-4 md:gap-0 justify-between md:justify-center flex-wrap max-w-4xl mx-auto mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  currentStep >= step.id
                    ? "bg-primary-800 text-white dark:text-black"
                    : "bg-neutral-200 text-neutral-500"
                }`}
              >
                <Check className="w-4 h-4" />
              </div>
              <span
                className={`mt-2 text-xs font-medium flex flex-col text-center ${
                  currentStep >= step.id
                    ? "text-primary-700"
                    : "text-neutral-500"
                }`}
              >
                <span className="uppercase text-xs">
                  {languageTranslate(language, "step")} {index + 1}
                </span>
                <span>{step.label}</span>
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`max-md:hidden flex-1 h-0.5 mx-4 ${
                  currentStep > step.id ? "bg-primary-800" : "bg-neutral-200"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GenericStepper;
