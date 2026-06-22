import React, { useState, useCallback } from "react";
import {
  Upload,
  FileText,
  Image,
  Video,
  File,
  X,
  CheckCircle,
  AlertCircle,
  Trash2,
  Eye,
  Cloud,
} from "lucide-react";
import ButtonComponent from "./common/Buttons/ButtonComponent";

const BasicUploadWithPreview = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  // File type configurations
  const fileTypes = {
    image: {
      accept: "image/jpeg,image/png,image/gif,image/webp,image/svg+xml",
      icon: Image,
      color: "success",
      maxSize: 5 * 1024 * 1024, // 5MB
    },
    video: {
      accept: "video/mp4,video/webm,video/ogg",
      icon: Video,
      color: "warning",
      maxSize: 50 * 1024 * 1024, // 50MB
    },
    document: {
      accept:
        "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      icon: FileText,
      color: "primary",
      maxSize: 10 * 1024 * 1024, // 10MB
    },
    all: {
      accept: "*/*",
      icon: File,
      color: "neutral",
      maxSize: 20 * 1024 * 1024, // 20MB
    },
  };

  const [config] = useState({
    multiple: true,
    maxFiles: 10,
    acceptedTypes: "all",
    showPreview: true,
    showProgress: true,
  });

  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) return Image;
    if (file.type.startsWith("video/")) return Video;
    if (file.type === "application/pdf") return FileText;
    return File;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const validateFile = (file) => {
    const acceptedTypeList = fileTypes[config.acceptedTypes].accept;
    const maxSize = fileTypes[config.acceptedTypes].maxSize;

    if (acceptedTypeList !== "*/*" && !acceptedTypeList.includes(file.type)) {
      return { valid: false, error: `File type ${file.type} not supported` };
    }

    if (file.size > maxSize) {
      return {
        valid: false,
        error: `File too large. Max size: ${formatFileSize(maxSize)}`,
      };
    }

    return { valid: true, error: null };
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    addFiles(selectedFiles);
  };

  const addFiles = (newFiles) => {
    const validFiles = [];
    const errors = [];

    newFiles.forEach((file) => {
      const validation = validateFile(file);
      if (validation.valid) {
        validFiles.push({
          id: Date.now() + Math.random(),
          file: file,
          name: file.name,
          size: file.size,
          type: file.type,
          status: "pending",
          preview: URL.createObjectURL(file),
        });
      } else {
        errors.push(`${file.name}: ${validation.error}`);
      }
    });

    if (config.multiple && files.length + validFiles.length > config.maxFiles) {
      errors.push(`Maximum ${config.maxFiles} files allowed`);
      return;
    }

    setFiles((prev) => [...prev, ...validFiles]);
    if (errors.length > 0) {
      alert(errors.join("\n"));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    addFiles(droppedFiles);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  };

  const simulateUpload = async (fileId) => {
    for (let progress = 0; progress <= 100; progress += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setUploadProgress((prev) => ({ ...prev, [fileId]: progress }));
    }
    return true;
  };

  const handleUpload = async () => {
    setIsUploading(true);

    const pendingFiles = files.filter((f) => f.status === "pending");

    for (const file of pendingFiles) {
      setFiles((prev) =>
        prev.map((f) => (f.id === file.id ? { ...f, status: "uploading" } : f)),
      );

      const success = await simulateUpload(file.id);

      setFiles((prev) =>
        prev.map((f) =>
          f.id === file.id
            ? { ...f, status: success ? "success" : "error" }
            : f,
        ),
      );
    }

    setIsUploading(false);
  };

  const clearAll = () => {
    setFiles([]);
    setUploadProgress({});
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Basic Drag & Drop Area */}
      <div className="space-y-2 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Upload Files</h2>
        <p className="text-sm text-gray-500">
          Drag and drop your files here or click to browse
        </p>
      </div>

      {/* Drag & Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
          ${
            isDragging
              ? "border-primary-500 bg-primary-50"
              : "border-gray-300 hover:border-primary-400 hover:bg-gray-50"
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-upload").click()}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          multiple={config.multiple}
          onChange={handleFileChange}
          accept={fileTypes[config.acceptedTypes].accept}
        />

        <div className="flex flex-col items-center gap-3">
          <div
            className={`p-3 rounded-full transition-colors ${
              isDragging ? "bg-primary-100" : "bg-gray-100"
            }`}
          >
            <Cloud
              className={`w-8 h-8 transition-colors ${
                isDragging ? "text-primary-600" : "text-gray-600"
              }`}
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium">
              {isDragging
                ? "Drop files here"
                : "Click to upload or drag and drop"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {fileTypes[config.acceptedTypes].accept === "*/*"
                ? "All file types supported"
                : fileTypes[config.acceptedTypes].accept}
              {" • "}
              Max {formatFileSize(fileTypes[config.acceptedTypes].maxSize)}
              {config.multiple && ` • Max ${config.maxFiles} files`}
            </p>
          </div>
        </div>
      </div>

      {/* File List with Preview */}
      {files.length > 0 && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-gray-900">
              Selected Files ({files.length}/{config.maxFiles})
            </h4>
            <div className="flex gap-2">
              <ButtonComponent
                title="Clear All"
                variant="outlined"
                size="sm"
                onClick={clearAll}
                icon={<Trash2 />}
              />
              <ButtonComponent
                title="Upload All"
                variant="filled"
                size="sm"
                onClick={handleUpload}
                loading={isUploading}
                icon={<Upload />}
              />
            </div>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {files.map((file) => {
              const FileIcon = getFileIcon(file.file);
              const progress = uploadProgress[file.id] || 0;

              return (
                <div
                  key={file.id}
                  className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {/* File Preview */}
                  <div className="flex-shrink-0">
                    {config.showPreview && file.type.startsWith("image/") ? (
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                    ) : (
                      <div className="p-2 bg-white rounded-lg">
                        <FileIcon className="w-5 h-5 text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-xs text-gray-500">
                        {formatFileSize(file.size)}
                      </p>
                      {file.status === "success" && (
                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Uploaded
                        </span>
                      )}
                      {file.status === "error" && (
                        <span className="text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Failed
                        </span>
                      )}
                    </div>

                    {/* Upload Progress Bar */}
                    {config.showProgress && file.status === "uploading" && (
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-primary-600 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {progress}%
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-1">
                    {file.status !== "uploading" && (
                      <>
                        {config.showPreview &&
                          file.type.startsWith("image/") && (
                            <ButtonComponent
                              variant="icon"
                              size="sm"
                              icon={<Eye />}
                              tooltipText="Preview"
                              onClick={() =>
                                window.open(file.preview, "_blank")
                              }
                            />
                          )}
                        <ButtonComponent
                          variant="icon"
                          size="sm"
                          icon={<Trash2 />}
                          tooltipText="Remove"
                          onClick={() => removeFile(file.id)}
                          color="destructive"
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Upload Stats */}
      {files.length > 0 && (
        <div className="mt-6 bg-primary-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-primary-900 font-medium">
                Upload Summary
              </p>
              <p className="text-xs text-primary-700">
                {files.filter((f) => f.status === "success").length} of{" "}
                {files.length} files uploaded
                {files.filter((f) => f.status === "pending").length > 0 &&
                  ` • ${files.filter((f) => f.status === "pending").length} pending`}
              </p>
            </div>
            <div className="flex gap-2">
              <ButtonComponent
                title="Clear All"
                variant="outlined"
                size="sm"
                onClick={clearAll}
                icon={<Trash2 />}
              />
              <ButtonComponent
                title="Upload All"
                variant="filled"
                size="sm"
                onClick={handleUpload}
                loading={isUploading}
                icon={<Upload />}
              />
            </div>
          </div>
        </div>
      )}

      {/* Info Note */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <InfoIcon size={18} />
          Features:
        </h3>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Drag & drop or click to upload files</li>
          <li>• Preview images before uploading</li>
          <li>• Upload progress indicators</li>
          <li>• Remove individual files</li>
          <li>• Clear all files at once</li>
          <li>• File type validation</li>
          <li>• File size limits</li>
          <li>• Multiple file upload support</li>
        </ul>
      </div>
    </div>
  );
};

// Helper Info icon component
const InfoIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default BasicUploadWithPreview;
