import { Clock4 } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonHistoryType = ({
  title,
  type = "button",
  icon = <Clock4 height={10.5} width={10.5} />,
  onClick,
  toolTipText = "",
  tooltipSide = "top",
  className,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type={type}
          className={`
            flex flex-col gap-y-2 justify-center txt-primary-700 
            items-center cursor-pointer text-primary-700 
            hover:bg-primary-50 p-2 rounded-md
            focus:outline-none focus:ring-2 focus:ring-offset-2
            transition-colors duration-200
            ${className}
          `}
          onClick={onClick}
        >
          <span className="">{icon}</span>
          <span className="custom-text-14 hidden md:block">{title}</span>
        </button>
      </TooltipTrigger>
      {/* Show tooltip on mobile only */}
      {toolTipText && (
        <TooltipContent
          side={tooltipSide}
          className="block md:hidden bg-neutral-800 text-neutral-100"
        >
          <p className="w-full text-wrap max-w-xs">{toolTipText}</p>
        </TooltipContent>
      )}
    </Tooltip>
  );
};

export default ButtonHistoryType;
