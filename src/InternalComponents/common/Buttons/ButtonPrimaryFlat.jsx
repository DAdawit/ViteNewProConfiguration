import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ButtonPrimaryFlat = ({
  title,
  icon,
  type = "button",
  iconPosition = "right",
  iconWidth = 16,
  iconHeight = 16,
  onClick,
  disabled = false,
  hover
}) => {
  const sizedIcon = icon
    ? React.cloneElement(icon, {
        width: iconWidth,
        height: iconHeight,
        className: `flex-shrink-0 ${icon.props.className || ""}`,
      })
    : null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type={type}
          disabled={disabled}
          className={`${hover ? "hover:bg-primary-50 p-2 hover:rounded-md":""} flex flex-col items-center gap-2 bg-transparent  text-sm text-primary-700 cursor-pointer`}
          onClick={onClick}
        >
          {iconPosition === "left" && sizedIcon}
          <span className="hidden md:block">{title}</span>
          {iconPosition === "right" && sizedIcon}
        </button>
      </TooltipTrigger>
      <TooltipContent
        side={"topD"}
        className="block md:hidden bg-gray-800 text-white"
      >
        <p className="w-full text-wrap max-w-xs">{title}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default ButtonPrimaryFlat;
