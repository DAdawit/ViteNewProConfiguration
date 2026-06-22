import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { languageTranslate } from "@/utils/data";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import useAppStore from "@/Store/useAppStore";

const Pagination = ({ page, setPage, totalPages }) => {
  const language = useAppStore((state) => state.language);
  const [inputValue, setInputValue] = useState("");

  const goToPage = (newPage) => {
    const num = parseInt(newPage, 10);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      setPage(num);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === "" || /^\d+$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleGo = () => {
    if (inputValue !== "") {
      goToPage(inputValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue !== "") {
      e.preventDefault();
      handleGo();
    }
  };

  const navigate = (newPage) => {
    const clamped = Math.max(1, Math.min(totalPages, newPage));
    setPage(clamped);
  };

  return (
    <div className="w-full flex flex-wrap my-2.5 custom-gap-12 items-center justify-between pt-1 pr-5 pb-1 rounded-[10px]">
      {/* Page Buttons */}
      <div className="flex items-center justify-center gap-1">
        <button
          onClick={() => navigate(1)}
          disabled={page === 1}
          className={`inline-flex custom-icon-32 items-center justify-center ${
            page === 1 ? "opacity-50" : "opacity-100"
          } text-primary-600 hover:text-white hover:bg-primary-500 cursor-pointer rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ChevronsLeft className="h-8 w-8" />
        </button>

        <button
          onClick={() => navigate(page - 1)}
          disabled={page === 1}
          className={`inline-flex custom-icon-32 items-center justify-center text-primary-600 hover:bg-primary-500 hover:text-white cursor-pointer transition-colors rounded-full disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        {(() => {
          const pages = [];
          const start = Math.max(1, page - 1);
          const end = Math.min(totalPages, page + 1);

          for (let i = start; i <= end; i++) {
            pages.push(i);
          }

          return pages.map((p) => (
            <button
              key={p}
              onClick={() => navigate(p)}
              className={`inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-neutral-600 p-5 custom-text-16 transition-colors ${
                page === p
                  ? "bg-primary-800 dark:bg-primary-200 text-white"
                  : "text-neutral-600"
              } hover:bg-primary-500 hover:text-neutral-50 cursor-pointer`}
            >
              {String(p).padStart(2, "0")}
            </button>
          ));
        })()}

        {page + 1 < totalPages && totalPages > 3 && (
          <span className="inline-flex h-9 items-center px-2 text-gray-500">
            ...
          </span>
        )}

        {page + 1 < totalPages && totalPages > 3 && (
          <button
            onClick={() => navigate(totalPages)}
            className={`inline-flex h-3.5 w-3.5 items-center justify-center text-neutral-600 rounded-full p-5 custom-text-16 transition-colors hover:bg-primary-500 hover:text-neutral-50 cursor-pointer`}
          >
            {String(totalPages).padStart(2, "0")}
          </button>
        )}

        <button
          onClick={() => navigate(page + 1)}
          disabled={page === totalPages}
          className={`inline-flex custom-icon-32 items-center justify-center text-primary-600 transition-colors hover:bg-primary-500 hover:text-neutral-50 cursor-pointer rounded-full disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        <button
          onClick={() => navigate(totalPages)}
          disabled={page === totalPages}
          className={`inline-flex custom-icon-32 items-center justify-center hover:bg-primary-500 hover:text-neutral-50 cursor-pointer text-primary-600 transition-colors rounded-full disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <ChevronsRight className="h-8 w-8" />
        </button>
      </div>

      <div className="flex justify-center sm:justify-end items-center gap-[clamp(6px,1.5vw,14px)]">
        <h1 className="font-bold text-primary-900 text-[clamp(12px,1vw,14px)]">
          {languageTranslate(language, "goto")}:
        </h1>

        <InputGroup className="h-7 w-22.5 rounded-full text-left border border-neutral-500 flex-row-reverse focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-0 overflow-hidden">
          <InputGroupInput
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="border-0 bg-transparent text-left text-gray-700 placeholder:text-gray-400 pr-1 focus:outline-none text-sm"
            placeholder="Eg: 14"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <InputGroupAddon
            className="border-0 bg-transparent pl-2 cursor-pointer hover:bg-neutral-100 rounded-full transition-colors"
            onClick={handleGo}
          >
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default Pagination;
