import { Button } from "@/components/ui/button";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonPrimaryOutlined = ({
  title,
  icon,
  type = "buttion",
  iconPosition = "right",
  iconWidth = 16,
  iconHeight = 16,
  onClick,
  toolTipText = "",
  tooltipSide = "top",
  className = "w-max border border-primary-700 text-primary-700 hover:bg-primary-100 whitespace-nowrap",
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
          className={`flex items-center gap-2 w-max bg-transparent border-primary-700 text-primary-700 hover:bg-primary-100 whitespace-nowrap cursor-pointer border ${className}`}
          onClick={onClick}
        >
          {iconPosition === "left" && sizedIcon}
          <span className=" whitespace-nowrap text-sm hidden md:block md:text-[16px]">
            {title}
          </span>
          {iconPosition === "right" && sizedIcon}
        </Button>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        className="block md:hidden bg-neutral-900 dark:bg-neutral-100 text-white"
      >
        <p className="w-full text-wrap max-w-xs">{toolTipText || title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ButtonPrimaryOutlined;
