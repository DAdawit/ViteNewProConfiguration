import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { FileText, Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function PDFViewer({
  file,
  fileName,
  fileSize,
  hideView = false,
  //   onClose,
}) {
  const language = useAppStore((state) => state.language);

  const [preview, setPreview] = useState(true);
  const pdfSrc = typeof file === "object" ? URL.createObjectURL(file) : file;
  const displayName =
    fileName || (typeof file === "object" ? file.name : "Document.pdf");
  const displaySize =
    fileSize ||
    (typeof file === "object" ? `${(file.size / 1024).toFixed(0)} KB` : "");

  useEffect(() => {
    return () => {
      if (typeof file === "object") {
        URL.revokeObjectURL(pdfSrc);
      }
    };
  }, [file, pdfSrc]);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full  h-full  bg-white dark:bg-black rounded-xl  flex flex-col overflow-hidden">
        <div className="bg-neutral-50 border-b border-neutral-300  p-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-neutral-700">
            <FileText className="w-5 h-5" />
            <div>
              <p className="font-medium text-sm truncate max-w-md">
                {displayName}
              </p>
              <p className="text-xs text-neutral-500">{displaySize}</p>
            </div>
          </div>

          {!hideView && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPreview(!preview);
              }}
              className="p-2 hover:bg-neutral-200 rounded-lg transition-colors flex items-center gap-2"
              aria-label="Close PDF preview"
            >
              <Eye className="w-5 h-5 text-neutral-600" />
              <span>{languageTranslate(language, "view")}</span>
            </button>
          )}
        </div>
        {preview && (
          <div className="flex-1 bg-neutral-50">
            <embed
              src={pdfSrc}
              type="application/pdf"
              width="100%"
              height="800px"
              onError={() => console.error("Embed failed")}
            />
          </div>
        )}

        <noscript>
          <div className="p-8 text-center text-neutral-600">
            {languageTranslate(language, "browserSupport")}
            <a
              href={pdfSrc}
              className="text-info-600 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {languageTranslate(language, "download")}
            </a>
          </div>
        </noscript>
      </div>
    </div>
  );
}
