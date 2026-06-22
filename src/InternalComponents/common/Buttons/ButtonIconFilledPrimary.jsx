import { Button } from "@/components/ui/button";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonIconFilledPrimary = ({
  icon,
  onClick,
  type="button",
  toolTipText = "",
  tooltipSide = "top",
  className
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type={type}
          onClick={onClick}
          className={`
             rounded-[10px] 
            hover:bg-primary-darkest
            transition-colors duration-200
            focus:outline-none focus:ring-2 bg-primary-700  focus:ring-offset-2
          ${className}`}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      {/* Show tooltip on mobile only */}
      {toolTipText && (
        <TooltipContent
          side={tooltipSide}
          className="block md:hidden bg-gray-800 text-white dark:text-black"
        >
          <p className="w-full text-wrap max-w-xs">{toolTipText}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

export default ButtonIconFilledPrimary;
