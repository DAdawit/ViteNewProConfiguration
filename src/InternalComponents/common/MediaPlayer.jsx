import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { useState } from "react";

const MediaPlayer = ({ fileName, type = "video" }) => {
  const language = useAppStore((state) => state.language);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const token = sessionStorage.getItem("tID");

  const handleError = () => {
    setIsLoading(false);
    setError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const retry = () => {
    setError(false);
    setIsLoading(true);
  };

  const mediaSrc = `${import.meta.env.VITE_APP_BACKEND_URL}/accusation_api/Accusations/${fileName}/readfile?api_key=${
    import.meta.env.VITE_APP_GET_ACCMEDIA_FILES_API
  }&tID=${token}`;

  const isAudio = type.toLowerCase() === "audio";
  const isVideo = type.toLowerCase() === "video";

  return (
    <div className="relative w-full">
      {error ? (
        <div className="flex flex-col items-center justify-center p-6 bg-neutral-50 border border-neutral-200 rounded-lg min-h-50">
          <div className="text-destructive-500 text-lg mb-3 font-medium">
            {languageTranslate(language, "failedToLoadMedia")}
          </div>
          <p className="text-neutral-600 text-sm mb-4 text-center">
            {languageTranslate(language, "media_load_error_with_retry")}
          </p>
          <button
            onClick={retry}
            className="px-5 py-2.5 bg-info-500 text-white rounded-lg hover:bg-info-600 transition-colors duration-200 font-medium"
          >
            {languageTranslate(language, "tryAgain")}
          </button>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 rounded-lg z-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 border-4 border-info-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                <div className="text-neutral-600 font-medium">
                  {languageTranslate(language, "loading")}...
                </div>
              </div>
            </div>
          )}

          {isVideo ? (
            <div
              className={`w-full ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
            >
              <video
                src={mediaSrc}
                muted
                controls
                controlsList="nodownload"
                onError={handleError}
                onLoadedData={handleLoad}
                className="w-full h-auto max-h-125 rounded-lg shadow-sm"
                preload="metadata"
              >
                {languageTranslate(language, "video_not_supported")}
              </video>
            </div>
          ) : isAudio ? (
            <div
              className={`w-full ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
            >
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-info-100 rounded-full">
                    <svg
                      className="w-5 h-5 text-info-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">
                      {languageTranslate(language, "audioFile")}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {languageTranslate(language, "playing")}: {fileName}
                    </div>
                  </div>
                </div>
                <audio
                  src={mediaSrc}
                  controls
                  controlsList="nodownload"
                  onError={handleError}
                  onLoadedData={handleLoad}
                  className="w-full"
                  preload="metadata"
                >
                  {languageTranslate(language, "audio_not_supported")}
                </audio>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <div className="text-warning-800 font-medium">
                {languageTranslate(language, "unsupportedMediaType")}: {type}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MediaPlayer;
