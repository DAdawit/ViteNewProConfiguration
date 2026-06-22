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
  type = "button",
  toolTipText = "",
  tooltipSide = "top",
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type={type}
          onClick={onClick}
          className="
            py-1 px-5 txt-primary-700 cursor-pointer
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-brandBlue focus:ring-offset-2
          "
        >
          {icon}
        </Button>
      </TooltipTrigger>
      {/* Show tooltip on mobile only */}
      {toolTipText && (
        <TooltipContent
          side={tooltipSide}
          className="block md:hidden bg-gray-800 text-white"
        >
          <p className="w-full text-wrap max-w-xs">{toolTipText}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

export default ButtonIconFilledPrimary;
