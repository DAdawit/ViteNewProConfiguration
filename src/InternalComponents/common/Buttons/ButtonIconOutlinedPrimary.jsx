import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonIconOutlinedPrimary = ({
  icon,
  onClick,
  type = "button",
  toolTipText = "",
  tooltipSide = "top",
  className,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
        type={type}
          onClick={onClick}
          className={`
             
            p-2 rounded-lg cursor-pointer  
       
            transition-colors duration-200
            focus:outline-none focus:ring-2  focus:ring-offset-2 ${className}
          `}
        >
          {icon}
        </button>
      </TooltipTrigger>
      {/* Show tooltip on mobile only */}
      {toolTipText && (
        <TooltipContent
          side={tooltipSide}
          className="block md:hidden  text-white"
        >
          <p className="w-full text-wrap max-w-xs">{toolTipText}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

export default ButtonIconOutlinedPrimary;
