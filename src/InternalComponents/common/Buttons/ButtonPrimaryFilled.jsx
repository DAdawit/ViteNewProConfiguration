import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonPrimaryFilled = ({
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
  disabled,
}) => {
  // Clone the icon and apply size props
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
          disabled={disabled}
          type={type}
          onClick={onClick}
          className={`flex ${!title ? "justify-center" : ""} items-center gap-2 bg-primary-700  text-primary-50  cursor-pointer ${className}`}
        >
          {iconPosition === "left" && sizedIcon}
          {title && (
            <span className="hidden md:block whitespace-nowrap text-sm md:text-[16px]">
              {title}
            </span>
          )}

          {iconPosition === "right" && sizedIcon}
        </Button>
      </TooltipTrigger>
      {/* Show tooltip on mobile only */}
      <TooltipContent
        side={tooltipSide}
        className="block md:hidden bg-gray-800 text-white"
      >
        <p className="w-full text-wrap max-w-xs">{toolTipText || title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ButtonPrimaryFilled;
