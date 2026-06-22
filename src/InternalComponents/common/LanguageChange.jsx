import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
const LanguageChange = () => {
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);

  return (
    <Select value={language} onValueChange={(val) => setLanguage(val)}>
      <SelectTrigger className="w-max bg-transparent [&_svg]:!text-neutral-700 hover:bg-neutral-100 transition-colors relative text-neutral-700 gap-1 rounded-full pt-3 pb-3 px-3.5 border border-neutral-700 shadow-[0px_1px_2px_0px_#1018280A]">
        <SelectValue
          placeholder={languageTranslate(language, "selectLanguage")}
        />
      </SelectTrigger>
      <SelectContent className="min-w-25 sm:min-w-30">
        <SelectGroup>
          <SelectItem value="en">
            {languageTranslate(language, "english")}
          </SelectItem>
          <SelectItem value="am">
            {languageTranslate(language, "amharic")}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageChange;
