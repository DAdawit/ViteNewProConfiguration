import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonPrimaryDestructive = ({
  title,
  icon,
  type = "button",
  iconPosition = "right",
  iconWidth = 16,
  iconHeight = 16,
  onClick,
  toolTipText = "",
  tooltipSide = "top",
  className,
  smHideText = false,
}) => {
  const sizedIcon = icon
    ? React.cloneElement(icon, {
        width: iconWidth,
        height: iconHeight,
        className: `${icon.props.className || ""}`,
      })
    : null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          type={type}
          onClick={onClick}
          className={`flex items-center gap-2 bg-destructive-50 text-destructive-950 hover:bg-destructive-100  cursor-pointer ${className}`}
        >
          {iconPosition === "left" && sizedIcon}
          <span
            className={`whitespace-nowrap text-sm md:text-[16px] ${
              smHideText ? "hidden md:inline" : ""
            }`}
          >
            {title}
          </span>
          {iconPosition === "right" && sizedIcon}
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        className="block md:hidden bg-gray-800 text-white"
      >
        <p className="w-full text-wrap max-w-xs">{toolTipText || title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ButtonPrimaryDestructive;
