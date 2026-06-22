import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, X } from "lucide-react";

const MultiSelect = ({
  options = [],
  selected = [],
  onSelectedChange,
  placeholder = "Choose options",
  searchPlaceholder = "Search options...",
  emptyMessage = "No options found.",
  className = "",
  formatDisplay = null,
  maxSelection = null,
  language = "en",
}) => {
  const [open, setOpen] = useState(false);

  const addOption = (option) => {
    if (maxSelection === 1) {
      onSelectedChange([option]);
      setOpen(false);
      return;
    }

    const exists = selected?.some((item) => item?._id === option?._id);

    if (exists) {
      onSelectedChange(selected?.filter((item) => item?._id !== option?._id));
    } else {
      if (maxSelection && selected?.length >= maxSelection) {
        return;
      }
      onSelectedChange([...selected, option]);
    }
    const willReachMax = maxSelection && selected?.length + 1 >= maxSelection;
    if (willReachMax && maxSelection > 1) {
      setOpen(false);
    }
  };

  const removeOption = (option) => {
    onSelectedChange(selected?.filter((item) => item?._id !== option?._id));
  };

  const filteredOptions = options?.filter(
    (option) => !selected?.some((item) => item?._id === option?._id),
  );

  const getDisplayText = (item) => {
    if (formatDisplay && typeof formatDisplay === "function") {
      return formatDisplay(item);
    }
    if (item?.fullname) return item?.fullname;
    if (item?.perm_category) return item?.perm_category;

    if (
      item?.position?.lang_type &&
      typeof item?.position?.lang_type === "object"
    ) {
      const positionName =
        item?.position?.lang_type[language] ||
        item?.position?.lang_type?.en ||
        "-";
      const orgName =
        item?.organization?.name?.[language] ||
        item?.organization?.name?.en ||
        "-";
      return `${item?.user_id?.fullname} (${positionName}) (${orgName})`;
    }

    if (item?.name) {
      if (typeof item?.name === "string") return item?.name;
      if (typeof item?.name === "object" && item?.name !== null) {
        const name = item?.name[language] || item?.name?.en || "-";
        const orgName =
          item?.organization?.name?.[language] ||
          item?.organization?.name?.en ||
          "-";
        if (orgName) return `${name}  (${orgName})`;
        return `${name}  (${orgName})`;
      }
    }
    return "-";
  };

  const getSearchText = (option) => {
    const displayText = getDisplayText(option);
    if (option?.name && typeof option?.name === "object") {
      const amharicName = option?.name?.am || "";
      return `${displayText} ${amharicName}`;
    }
    return displayText;
  };

  const isMaxReached = maxSelection && selected?.length >= maxSelection;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={`flex flex-wrap items-center gap-2 p-2 border rounded-md min-h-11 bg-neutral-50 cursor-text hover:border-neutral-400 transition-colors ${className}`}
        >
          {selected?.length === 0 && (
            <span className="text-[14px] text-muted-foreground ml-1">
              {placeholder}
            </span>
          )}

          {selected?.map((item) => (
            <Badge
              key={item?._id}
              variant="secondary"
              className="bg-primary-100 w-full text-wrap  flex-wrap wrap-break-word text-primary-800 hover:bg-neutral-100 px-2 py-1 font-mono text-xs flex items-center gap-1 overflow-hidden"
            >
              <span className="min-w-0 flex-1 truncate text-wrap">
                {getDisplayText(item)}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1 hover:bg-transparent hover:text-red-600 shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  removeOption(item);
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-full p-0"
        align="start"
        style={{ width: "var(--radix-popover-trigger-width)" }}
      >
        <Command className="min-w-full">
          <CommandInput placeholder={searchPlaceholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {filteredOptions?.map((option) => (
                <CommandItem
                  key={option?._id}
                  value={getSearchText(option)}
                  onSelect={() => addOption(option)}
                  className="cursor-pointer text-sm"
                  disabled={
                    isMaxReached &&
                    !selected.some((item) => item?._id === option?._id)
                  }
                >
                  {getDisplayText(option)}
                  <Check
                    className={`ml-auto h-4 w-4 ${
                      selected?.some((item) => item?._id === option?._id)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
