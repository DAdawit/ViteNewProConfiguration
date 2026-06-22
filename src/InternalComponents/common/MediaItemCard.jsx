import { languageTranslate } from "@/utils/data";
import { X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PiFileVideoFill } from "react-icons/pi";
import { PiFileAudioFill } from "react-icons/pi";
import { BsFileEarmarkImage } from "react-icons/bs";
import { BsFiletypePdf } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import MediaPlayer from "./MediaPlayer";
import useAppStore from "@/Store/useAppStore";

export const MediaItemCard = ({
  item,
  fileUrl,
  fileName,
  showDeleteButton = false,
  onDelete,
  onPreview,
  open,
}) => {
  const language = useAppStore((state) => state.language);

  const [expandedStamp, setExpandedStamp] = useState(open ? item : null);

  const getFileExtension = (url) => {
    if (!url) return "file";
    const filename = url?.split("/").pop() || "";
    const extension = filename?.split(".").pop()?.toLowerCase() || "";
    return extension || "file";
  };

  const getFileIcon = (url) => {
    const ext = getFileExtension(url);

    if (["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(ext)) {
      return <BsFileEarmarkImage className="text-neutral-800" size={32} />;
    } else if (ext === "pdf") {
      return <BsFiletypePdf className="text-neutral-800" size={24} />;
    } else if (["mp4", "avi", "mov", "mkv", "webm", "flv"].includes(ext)) {
      return <PiFileVideoFill className="text-neutral-800" size={24} />;
    } else if (["mp3", "wav", "flac", "ogg", "aac"].includes(ext)) {
      return <PiFileAudioFill className="text-neutral-800" size={24} />;
    } else {
      return <HiDocumentText className="text-neutral-800" size={24} />;
    }
  };
  const getMediaType = (url) => {
    const ext = getFileExtension(url);

    if (["png", "jpg", "jpeg", "gif", "webp", "svg", "bmp"].includes(ext)) {
      return "image";
    } else if (ext === "pdf") {
      return "pdf";
    } else if (["mp4", "avi", "mov", "mkv", "webm", "flv"].includes(ext)) {
      return "video";
    } else if (["mp3", "wav", "flac", "ogg", "aac"].includes(ext)) {
      return "audio";
    } else {
      return "document";
    }
  };
  const mediaType = getMediaType(fileUrl);
  const fileIcon = getFileIcon(fileUrl);

  const previewTexts = {
    image: languageTranslate(language, "view"),
    pdf: languageTranslate(language, "view"),
    video: languageTranslate(language, "play"),
    audio: languageTranslate(language, "listen"),
    document: languageTranslate(language, "view"),
  };

  const previewText =
    previewTexts[mediaType] || languageTranslate(language, "view");

  const toggleExpandStamp = (stampFileName) => {
    setExpandedStamp(expandedStamp === stampFileName ? null : stampFileName);
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(fileUrl);
    } else {
      toggleExpandStamp(item);
    }
  };
  const formatFileName = (name) => {
    if (!name) return "";
    const parts = name.split("-");
    return parts.length > 2 ? parts.slice(2).join("-") : name;
  };

  return (
    <>
      <div
        className={`flex justify-between items-center gap-y-2 bg-neutral-100 pl-2.5 pr-5 py-2.5 rounded-[10px] w-full ${
          expandedStamp === item ? "border-2 border-primary-500" : ""
        }`}
      >
        <div className="flex custom-gapx-8 items-center">
          <div className="text-primary-darkest flex items-center gap-3">
            {fileIcon}
          </div>

          <div className="grid ml-3">
            <h1 className="text-primary-darkest custom-text-14 font-medium">
              {formatFileName(fileName)}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            onClick={handlePreview}
            className="text-primary-darkest custom-text-14 cursor-pointer hover:text-primary-600 transition-colors"
          >
            {previewText}
          </button>
          {showDeleteButton && (
            <button
              onClick={() => onDelete?.(item)}
              className="text-neutral-500 hover:text-destructive-500 transition-colors p-1 rounded hover:bg-red-50"
              title="Delete file"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
      {expandedStamp === item && (
        <div
          className={`mt-2 card  rounded-lg shadow-md overflow-hidden border border-neutral-200  animate-fade-in ${
            expandedStamp === item ? "border-primary-300" : ""
          }`}
        >
          <div className="p-4 bg-neutral-50  flex justify-end items-center border-orange-500">
            <button
              onClick={() => setExpandedStamp(null)}
              className="text-neutral-500 hover:text-neutral-700  text-sm underline"
            >
              {languageTranslate(language, "hide") || "Close"}
            </button>
          </div>
          <div className="flex justify-center items-center p-6 bg-neutral-100 ">
            {mediaType === "image" ? (
              <img
                src={fileUrl}
                alt={fileName}
                className="max-w-full max-h-96 object-contain rounded-md shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Found";
                }}
              />
            ) : mediaType === "pdf" ? (
              <div className="text-center p-8">
                {getFileIcon(fileUrl)}
                <p className="text-neutral-600 mt-2">PDF Document</p>

                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 underline mt-2 inline-block"
                >
                  {languageTranslate(language, "openOnNewTab")}
                </a>
              </div>
            ) : mediaType === "video" ? (
              <div>
                <MediaPlayer fileName={fileName} />
              </div>
            ) : mediaType === "audio" ? (
              <div>
                <MediaPlayer fileName={fileName} type="audio" />
              </div>
            ) : (
              <div className="text-center p-8">
                {getFileIcon(fileUrl)}
                <p className="text-neutral-600 mt-2">
                  {languageTranslate(language, "document")}
                </p>
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 underline mt-2 inline-block"
                >
                  {languageTranslate(language, "download")}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
