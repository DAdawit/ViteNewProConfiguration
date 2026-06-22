import React from "react";

const ButtonReject = ({
  title,
  icon,
  type= "button",
  iconPosition = "right",
  iconWidth = 16,
  iconHeight = 16,
  onClick,
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
    <button
    type={type}
      onClick={onClick}
      className="flex items-center gap-x-2 px-2 py-1 bg-Destructive-50 text-Destructive-900 rounded-[4px]"
    >
      {iconPosition === "left" && sizedIcon}
      {title}
      {iconPosition === "right" && sizedIcon}
    </button>
  );
};

export default ButtonReject;
