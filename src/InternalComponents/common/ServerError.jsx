// import serverErrorImage from "../assets/serverError.png";
import serverErrorImage from "../../assets/serverError.png";
import { RefreshCw } from "lucide-react";
import { languageTranslate } from "@/utils/data";
import useAppStore from "@/Store/useAppStore";

const ServerError = () => {
  const language = useAppStore((state) => state.language);

  return (
    <div className="fixed top-0 left-0 card z-1000 overflow-y-auto bg-primary-50 h-screen w-full flex flex-col items-center justify-center px-4 py-6">
      <div className="max-w-2xl w-full text-center">
        {/* Illustration */}
        <div className="flex justify-center mb-12">
          <img
            src={serverErrorImage}
            alt="Server Error Illustration"
            className="w-200 h-auto object-contain"
          />
        </div>

        {/* Error Content */}
        <div className="mb-0">
          <div className="mb-0">
            <p className="text-[50px] font-bold">500</p>
          </div>
          <div className="mb-1">
            <h1
              style={{
                color: "var(--neutral-900)",
                margin: "0",
                fontWeight: "700",
                fontSize: "3.5rem",
              }}
            >
              {languageTranslate(language, "somethingWentWrong")}
            </h1>
          </div>
          <div className="mb-6">
            <p
              style={{
                color: "var(--neutral-600)",
                fontSize: "1rem",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              {languageTranslate(language, "serverErrorDescription")}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col   sm:flex-row sm:justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-primary-800 text-primary-100 rounded-lg cursor-pointer transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            {languageTranslate(language, "refreshPage")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
