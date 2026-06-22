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
  Download,
  FolderOpen,
  Cloud,
  Link as LinkIcon,
  Copy,
  FileCheck,
  RefreshCw,
} from "lucide-react";
import ButtonComponent from "./common/Buttons/ButtonComponent";

const UploadSection = () => {
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

  const [config, setConfig] = useState({
    multiple: true,
    maxFiles: 10,
    acceptedTypes: "all", // image, video, document, all
    maxSize: fileTypes.all.maxSize,
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

  // Upload Variant 1: Basic Drag & Drop
  const BasicDragDrop = () => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
      <input
        type="file"
        id="file-upload-basic"
        className="hidden"
        multiple={config.multiple}
        onChange={handleFileChange}
        accept={fileTypes[config.acceptedTypes].accept}
      />
      <label htmlFor="file-upload-basic" className="cursor-pointer block">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 bg-primary-50 rounded-full">
            <Upload className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <p className="text-gray-700 font-medium">
              Click to upload or drag and drop
            </p>
            <p className="text-sm text-gray-500 mt-1">
              {fileTypes[config.acceptedTypes].accept === "*/*"
                ? "All file types"
                : fileTypes[config.acceptedTypes].accept}
              {" • "}
              Max {formatFileSize(fileTypes[config.acceptedTypes].maxSize)}
              {config.multiple && ` • Max ${config.maxFiles} files`}
            </p>
          </div>
        </div>
      </label>
    </div>
  );

  // Upload Variant 2: Card Style with Preview
  const CardStyleUpload = () => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Upload Files</h3>
        <p className="text-sm text-gray-500 mt-1">
          Choose files or drag and drop them here
        </p>
      </div>

      <div
        className={`p-8 text-center transition-colors ${
          isDragging ? "bg-primary-50 border-2 border-primary-500" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload-card"
          className="hidden"
          multiple={config.multiple}
          onChange={handleFileChange}
          accept={fileTypes[config.acceptedTypes].accept}
        />
        <label htmlFor="file-upload-card" className="cursor-pointer block">
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 bg-gray-100 rounded-full">
              <Cloud className="w-10 h-10 text-gray-600" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">
                Drop your files here or{" "}
                <span className="text-primary-600">browse</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Supports{" "}
                {fileTypes[config.acceptedTypes].accept.split(",").length} file
                types
              </p>
            </div>
          </div>
        </label>
      </div>

      {files.length > 0 && (
        <div className="p-6 border-t border-gray-200">
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

                  <div className="flex gap-1">
                    {file.status !== "uploading" && (
                      <>
                        <ButtonComponent
                          variant="icon"
                          size="sm"
                          icon={<Eye />}
                          tooltipText="Preview"
                          onClick={() => window.open(file.preview, "_blank")}
                        />
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
    </div>
  );

  // Upload Variant 3: Modern Gradient Style
  const ModernGradientUpload = () => (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-8">
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-white rounded-2xl shadow-lg mb-4">
            <Upload className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Ready to Upload?
          </h3>
          <p className="text-gray-600">
            Drag & drop your files here or click to browse
          </p>
        </div>

        <input
          type="file"
          id="file-upload-modern"
          className="hidden"
          multiple={config.multiple}
          onChange={handleFileChange}
          accept={fileTypes[config.acceptedTypes].accept}
        />
        <label htmlFor="file-upload-modern" className="block cursor-pointer">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-dashed border-primary-300 hover:border-primary-500 transition-all">
            <ButtonComponent
              title="Choose Files"
              variant="filled"
              icon={<FolderOpen />}
              className="mx-auto"
            />
            <p className="text-xs text-gray-500 mt-3">
              or drag and drop anywhere in this area
            </p>
          </div>
        </label>

        {files.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-medium text-gray-700">
                {files.length} file(s) selected
              </p>
              <ButtonComponent
                title="Upload All"
                variant="filled"
                size="sm"
                onClick={handleUpload}
                loading={isUploading}
                icon={<Upload />}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {files.slice(0, 5).map((file) => (
                <div
                  key={file.id}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg shadow-sm"
                >
                  <File className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-700 truncate max-w-[150px]">
                    {file.name}
                  </span>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="hover:text-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {files.length > 5 && (
                <div className="px-3 py-1.5 bg-white rounded-lg shadow-sm">
                  <span className="text-xs text-gray-500">
                    +{files.length - 5} more
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Upload Variant 4: Compact List Style
  const CompactListUpload = () => (
    <div className="border border-gray-200 rounded-lg">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-gray-900">File Attachments</h3>
          <p className="text-xs text-gray-500">
            Upload files to attach to your post
          </p>
        </div>
        <input
          type="file"
          id="file-upload-compact"
          className="hidden"
          multiple={config.multiple}
          onChange={handleFileChange}
          accept={fileTypes[config.acceptedTypes].accept}
        />
        <label htmlFor="file-upload-compact">
          <ButtonComponent
            title="Add Files"
            variant="outlined"
            size="sm"
            icon={<Upload />}
          />
        </label>
      </div>

      {files.length === 0 ? (
        <div
          className={`p-8 text-center transition-colors ${
            isDragging ? "bg-primary-50" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="p-2 bg-gray-100 rounded-full">
              <File className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500">
              Drop files here or{" "}
              <label
                htmlFor="file-upload-compact"
                className="text-primary-600 cursor-pointer"
              >
                browse
              </label>
            </p>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {files.map((file) => {
            const FileIcon = getFileIcon(file.file);
            return (
              <div
                key={file.id}
                className="p-3 flex items-center justify-between hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <FileIcon className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {file.status === "success" ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : file.status === "error" ? (
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  ) : (
                    <ButtonComponent
                      variant="icon"
                      size="sm"
                      icon={<Trash2 />}
                      onClick={() => removeFile(file.id)}
                      color="destructive"
                      tooltipText="Remove"
                    />
                  )}
                </div>
              </div>
            );
          })}
          <div className="p-3 bg-gray-50 flex justify-end gap-2">
            <ButtonComponent
              title="Clear"
              variant="outlined"
              size="sm"
              onClick={clearAll}
            />
            <ButtonComponent
              title="Upload"
              variant="filled"
              size="sm"
              onClick={handleUpload}
              loading={isUploading}
              icon={<Upload />}
            />
          </div>
        </div>
      )}
    </div>
  );

  // Upload Variant 5: URL/Link Upload
  const LinkUpload = () => {
    const [url, setUrl] = useState("");
    const [isValidating, setIsValidating] = useState(false);

    const handleUrlUpload = async () => {
      if (!url) return;
      setIsValidating(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert(`File from ${url} would be uploaded here`);
      setUrl("");
      setIsValidating(false);
    };

    return (
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <LinkIcon className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Upload from URL</h3>
        </div>

        <div className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/file.pdf"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <ButtonComponent
            title="Upload"
            variant="filled"
            onClick={handleUrlUpload}
            loading={isValidating}
            icon={<Upload />}
            disabled={!url}
          />
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Supports direct links to images, documents, and videos
        </p>
      </div>
    );
  };

  // Upload Variant 6: Multi-step Wizard
  const MultiStepUpload = () => {
    const [step, setStep] = useState(1);
    const [uploadComplete, setUploadComplete] = useState(false);

    const handleFinishUpload = async () => {
      await handleUpload();
      setUploadComplete(true);
      setStep(3);
    };

    if (uploadComplete) {
      return (
        <div className="text-center py-8">
          <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
            <FileCheck className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Upload Complete!
          </h3>
          <p className="text-gray-600 mb-4">
            {files.filter((f) => f.status === "success").length} files
            successfully uploaded
          </p>
          <ButtonComponent
            title="Upload More"
            variant="filled"
            onClick={() => {
              setUploadComplete(false);
              setStep(1);
              clearAll();
            }}
            icon={<RefreshCw />}
          />
        </div>
      );
    }

    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          {[1, 2].map((s) => (
            <div key={s} className="flex-1 relative">
              <div
                className={`flex items-center ${s === 2 ? "justify-end" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s
                      ? "bg-primary-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {s}
                </div>
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    step > s ? "bg-primary-600" : "bg-gray-200"
                  }`}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 absolute -bottom-5">
                {s === 1 ? "Select Files" : "Confirm & Upload"}
              </p>
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <BasicDragDrop />
            <div className="flex justify-end">
              <ButtonComponent
                title="Continue"
                variant="filled"
                onClick={() => files.length > 0 && setStep(2)}
                disabled={files.length === 0}
                icon={<ArrowRight />}
                iconPosition="right"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(file.file)({
                    className: "w-4 h-4 text-gray-500",
                  })}
                  <div>
                    <p className="text-sm text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <ButtonComponent
                  variant="icon"
                  size="sm"
                  icon={<Trash2 />}
                  onClick={() => removeFile(file.id)}
                  color="destructive"
                />
              </div>
            ))}
            <div className="flex justify-between gap-2">
              <ButtonComponent
                title="Back"
                variant="outlined"
                onClick={() => setStep(1)}
              />
              <ButtonComponent
                title="Upload Files"
                variant="filled"
                onClick={handleFinishUpload}
                loading={isUploading}
                icon={<Upload />}
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  // Configuration Panel
  const ConfigPanel = () => (
    <div className="bg-gray-50 rounded-lg p-4 mb-6">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        Upload Configuration
      </h3>
      <div className="flex flex-wrap gap-4">
        <div>
          <label className="text-xs text-gray-600 block mb-1">File Type</label>
          <select
            value={config.acceptedTypes}
            onChange={(e) =>
              setConfig({ ...config, acceptedTypes: e.target.value })
            }
            className="px-2 py-1 text-sm border rounded"
          >
            <option value="all">All Files</option>
            <option value="image">Images Only</option>
            <option value="video">Videos Only</option>
            <option value="document">Documents Only</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-600 block mb-1">
            Multiple Files
          </label>
          <select
            value={config.multiple}
            onChange={(e) =>
              setConfig({ ...config, multiple: e.target.value === "true" })
            }
            className="px-2 py-1 text-sm border rounded"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {config.multiple && (
          <div>
            <label className="text-xs text-gray-600 block mb-1">
              Max Files
            </label>
            <input
              type="number"
              value={config.maxFiles}
              onChange={(e) =>
                setConfig({ ...config, maxFiles: parseInt(e.target.value) })
              }
              className="px-2 py-1 text-sm border rounded w-20"
              min="1"
              max="50"
            />
          </div>
        )}

        <div>
          <label className="text-xs text-gray-600 block mb-1">
            Show Preview
          </label>
          <select
            value={config.showPreview}
            onChange={(e) =>
              setConfig({ ...config, showPreview: e.target.value === "true" })
            }
            className="px-2 py-1 text-sm border rounded"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-600 block mb-1">
            Show Progress
          </label>
          <select
            value={config.showProgress}
            onChange={(e) =>
              setConfig({ ...config, showProgress: e.target.value === "true" })
            }
            className="px-2 py-1 text-sm border rounded"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Upload Section
        </h1>
        <p className="text-gray-600">Choose from 6 different upload designs</p>
      </div>

      <ConfigPanel />

      {/* Variant 1: Basic Drag & Drop */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          1. Basic Drag & Drop
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Simple and clean upload area
        </p>
        <BasicDragDrop />
      </div>

      {/* Variant 2: Card Style with Preview */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          2. Card Style with Preview
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Full-featured upload with file preview and progress
        </p>
        <CardStyleUpload />
      </div>

      {/* Variant 3: Modern Gradient */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          3. Modern Gradient Style
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Eye-catching gradient design
        </p>
        <ModernGradientUpload />
      </div>

      {/* Variant 4: Compact List */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          4. Compact List Style
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Space-efficient design for sidebars
        </p>
        <CompactListUpload />
      </div>

      {/* Variant 5: URL/Link Upload */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          5. URL/Link Upload
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Upload files from external URLs
        </p>
        <LinkUpload />
      </div>

      {/* Variant 6: Multi-step Wizard */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          6. Multi-step Wizard
        </h2>
        <p className="text-sm text-gray-500 mb-3">Guided upload process</p>
        <div className="border rounded-lg p-6">
          <MultiStepUpload />
        </div>
      </div>

      {/* Stats Summary */}
      {files.length > 0 && (
        <div className="bg-primary-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-primary-900 font-medium">
                Upload Summary
              </p>
              <p className="text-xs text-primary-700">
                {files.filter((f) => f.status === "success").length} of{" "}
                {files.length} files uploaded
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
    </div>
  );
};

// Helper icon components
const ArrowRight = ({ size = 16 }) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default UploadSection;
