import useAppStore from "@/Store/useAppStore";
import { MoonIcon, Sun } from "lucide-react";

function ThemeToggleButton() {
  const theme = useAppStore((state) => state.theme);
  const setTheme = useAppStore((state) => state.setTheme);
  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`relative flex items-center rounded-full cursor-pointer transition-colors duration-700
        w-11 h-5
        md:w-14 md:h-[26px]
        xl:w-16 xl:h-[29px]
        ${theme === "dark" ? "bg-theme-toggler-800" : "bg-theme-toggler-100"}
      `}
    >
      {/* Moon on left */}
      <div className="flex-1 flex justify-center">
        <MoonIcon className="opacity-50 w-[10px] h-[10px] md:w-[13px] md:h-[13px] xl:w-[15px] xl:h-[15px]" />
      </div>

      {/* Sun on right */}
      <div className="flex-1 flex justify-center">
        <Sun className="opacity-50 text-theme-toggler-400 w-[10px] h-[10px] md:w-[13px] md:h-[13px] xl:w-[15px] xl:h-[15px]" />
      </div>

      {/* Knob */}
      <div
        className={`absolute rounded-full shadow-md flex items-center justify-center transform transition-transform duration-700
          w-4 h-4
          md:w-[22px] md:h-[22px]
          xl:w-6 xl:h-6
          ${
            theme === "dark"
              ? "translate-x-0.5 bg-theme-toggler-300"
              : "translate-x-[26px] md:translate-x-[30px] xl:translate-x-[34px] bg-theme-toggler-700"
          }
        `}
      >
        {theme === "dark" ? (
          <MoonIcon className="fill-theme-toggler-800 text-theme-toggler-800 w-[10px] h-[10px] md:w-[13px] md:h-[13px] xl:w-[15px] xl:h-[15px]" />
        ) : (
          <Sun className="fill-theme-toggler-100 text-theme-toggler-100 w-[10px] h-[10px] md:w-[13px] md:h-[13px] xl:w-[15px] xl:h-[15px]" />
        )}
      </div>
    </div>
  );
}

export default ThemeToggleButton;
