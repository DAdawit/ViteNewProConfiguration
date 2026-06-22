import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonCustom = ({
  text,
  type = "button",
  icon,
  onClick,
  toolTipText = "",
  tooltipSide = "top",
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type={type}
          onClick={onClick}
          className="
            bg-primary-800 text-white rounded-[10px] 
            cursor-pointer hover:bg-primary-darkest 
            flex items-center gap-x-2 px-2 py-1
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-brandBlue
          "
        >
          <span>{icon}</span>
          <span className="hidden md:inline whitespace-nowrap">{text}</span>
        </button>
      </TooltipTrigger>
      {/* Show tooltip on mobile only */}
      <TooltipContent
        side={tooltipSide}
        className="block md:hidden bg-gray-800 text-white"
      >
        <p className="w-full text-wrap max-w-xs">{toolTipText || text}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ButtonCustom;
