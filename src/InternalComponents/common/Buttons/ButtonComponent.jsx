import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ButtonComponent = ({
  // Content
  title,
  icon,

  // Variants
  variant = "filled", // filled, outlined, flat, destructive, icon, reject, link, destructive-icon, destructive-icon-filled, destructive-icon-outlined
  color = "primary", // primary, destructive, success, warning, neutral, etc.

  // Layout
  iconPosition = "right",
  iconWidth = 24,
  iconHeight = 24,

  // Behavior
  type = "button", // "button", "submit", "reset"
  onClick,
  disabled = false,
  loading = false,
  loadingText = "Loading...",

  // Link specific props
  href,
  target = "_self",
  rel,

  // Tooltip
  tooltipText = "",
  tooltipSide = "top",
  showTooltipOnMobile = true,
  showTooltipOnDesktop = false,

  // Styling
  className = "",
  size = "md", // sm, md, lg
  fullWidth = false,
  rounded = "lg", // none, sm, md, lg, xl, full
  customRounded = "",

  // Text visibility
  showTextOnSm = false,
  showTextOnMobile = true,
  customMobileBreakpoint = "md",

  // Loading component
  loadingComponent = null,
}) => {
  // Border radius mapping
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const getRoundedClass = () => {
    if (customRounded) return customRounded;
    if (
      variant === "icon" ||
      variant === "destructive-icon" ||
      variant === "destructive-icon-filled" ||
      variant === "destructive-icon-outlined"
    )
      return roundedStyles[rounded] || roundedStyles.lg;
    if (variant === "flat") return "rounded-md";
    if (variant === "link") return "rounded-none";
    return roundedStyles[rounded] || roundedStyles.lg;
  };

  // Color variants mapping
  const colorStyles = {
    primary: {
      filled: "bg-primary-700 text-primary-50 hover:bg-primary-800",
      outlined:
        "border border-primary-700 text-primary-700 hover:bg-primary-100 bg-transparent",
      flat: "text-primary-700 hover:bg-primary-50 bg-transparent",
      destructive:
        "bg-destructive-50 text-destructive-950 hover:bg-destructive-100",
      reject: "bg-destructive-50 text-destructive-900",
      icon: "hover:bg-primary-100 text-primary-700",
      iconFilled: "bg-primary-700 text-primary-50 hover:bg-primary-800",
      iconOutlined:
        "border border-primary-700 text-primary-700 hover:bg-primary-100 bg-transparent",
      destructiveIcon: "hover:bg-red-50 text-red-600",
      destructiveIconFilled: "bg-red-600 text-white hover:bg-red-700",
      destructiveIconOutlined:
        "border border-red-600 text-red-600 hover:bg-red-50 bg-transparent",
      link: "text-primary-700 hover:text-primary-800 hover:underline underline-offset-4",
      loading: "bg-primary-400 cursor-wait",
    },
    destructive: {
      filled: "bg-red-600 text-white hover:bg-red-700",
      outlined:
        "border border-red-600 text-red-600 hover:bg-red-50 bg-transparent",
      flat: "text-red-600 hover:bg-red-50 bg-transparent",
      destructive: "bg-red-50 text-red-900 hover:bg-red-100",
      reject: "bg-red-50 text-red-900",
      icon: "hover:bg-red-100 text-red-600",
      iconFilled: "bg-red-600 text-white hover:bg-red-700",
      iconOutlined:
        "border border-red-600 text-red-600 hover:bg-red-50 bg-transparent",
      destructiveIcon: "hover:bg-red-50 text-red-600",
      destructiveIconFilled: "bg-red-600 text-white hover:bg-red-700",
      destructiveIconOutlined:
        "border border-red-600 text-red-600 hover:bg-red-50 bg-transparent",
      link: "text-red-600 hover:text-red-700 hover:underline underline-offset-4",
      loading: "bg-red-400 cursor-wait",
    },
    success: {
      filled: "bg-green-600 text-white hover:bg-green-700",
      outlined:
        "border border-green-600 text-green-600 hover:bg-green-50 bg-transparent",
      flat: "text-green-600 hover:bg-green-50 bg-transparent",
      destructive: "bg-green-50 text-green-900 hover:bg-green-100",
      reject: "bg-green-50 text-green-900",
      icon: "hover:bg-green-100 text-green-600",
      iconFilled: "bg-green-600 text-white hover:bg-green-700",
      iconOutlined:
        "border border-green-600 text-green-600 hover:bg-green-50 bg-transparent",
      destructiveIcon: "hover:bg-green-50 text-green-600",
      destructiveIconFilled: "bg-green-600 text-white hover:bg-green-700",
      destructiveIconOutlined:
        "border border-green-600 text-green-600 hover:bg-green-50 bg-transparent",
      link: "text-green-600 hover:text-green-700 hover:underline underline-offset-4",
      loading: "bg-green-400 cursor-wait",
    },
    warning: {
      filled: "bg-yellow-500 text-white hover:bg-yellow-600",
      outlined:
        "border border-yellow-500 text-yellow-500 hover:bg-yellow-50 bg-transparent",
      flat: "text-yellow-500 hover:bg-yellow-50 bg-transparent",
      destructive: "bg-yellow-50 text-yellow-900 hover:bg-yellow-100",
      reject: "bg-yellow-50 text-yellow-900",
      icon: "hover:bg-yellow-100 text-yellow-500",
      iconFilled: "bg-yellow-500 text-white hover:bg-yellow-600",
      iconOutlined:
        "border border-yellow-500 text-yellow-500 hover:bg-yellow-50 bg-transparent",
      destructiveIcon: "hover:bg-yellow-50 text-yellow-600",
      destructiveIconFilled: "bg-yellow-500 text-white hover:bg-yellow-600",
      destructiveIconOutlined:
        "border border-yellow-500 text-yellow-500 hover:bg-yellow-50 bg-transparent",
      link: "text-yellow-600 hover:text-yellow-700 hover:underline underline-offset-4",
      loading: "bg-yellow-400 cursor-wait",
    },
    neutral: {
      filled: "bg-gray-600 text-white hover:bg-gray-700",
      outlined:
        "border border-gray-600 text-gray-600 hover:bg-gray-50 bg-transparent",
      flat: "text-gray-600 hover:bg-gray-50 bg-transparent",
      destructive: "bg-gray-50 text-gray-900 hover:bg-gray-100",
      reject: "bg-gray-50 text-gray-900",
      icon: "hover:bg-gray-100 text-gray-600",
      iconFilled: "bg-gray-600 text-white hover:bg-gray-700",
      iconOutlined:
        "border border-gray-600 text-gray-600 hover:bg-gray-50 bg-transparent",
      destructiveIcon: "hover:bg-gray-100 text-gray-600",
      destructiveIconFilled: "bg-gray-600 text-white hover:bg-gray-700",
      destructiveIconOutlined:
        "border border-gray-600 text-gray-600 hover:bg-gray-50 bg-transparent",
      link: "text-gray-600 hover:text-gray-700 hover:underline underline-offset-4",
      loading: "bg-gray-400 cursor-wait",
    },
  };

  // Size variants
  const sizeStyles = {
    sm: {
      button: "px-2 py-1 text-xs md:text-sm",
      icon: "w-3 h-3",
      gap: "gap-1",
      loadingSpinner: "w-3 h-3",
      link: "text-sm",
      iconButton: "p-1.5",
    },
    md: {
      button: "px-3 py-2 text-sm md:text-base",
      icon: "w-4 h-4",
      gap: "gap-2",
      loadingSpinner: "w-4 h-4",
      link: "text-base",
      iconButton: "p-2",
    },
    lg: {
      button: "px-4 py-2.5 text-base md:text-lg",
      icon: "w-5 h-5",
      gap: "gap-2.5",
      loadingSpinner: "w-5 h-5",
      link: "text-lg",
      iconButton: "p-2.5",
    },
  };

  // Determine tooltip text (fallback to title)
  const finalTooltipText = tooltipText || title || "";

  // Determine if tooltip should be shown
  const shouldShowTooltip = () => {
    if (!finalTooltipText) return false;
    if (variant === "reject") return false;
    if (showTooltipOnDesktop) return true;
    if (showTooltipOnMobile) return true;
    return false;
  };

  // Get responsive text classes
  const getTextResponsiveClass = () => {
    if (
      variant === "icon" ||
      variant === "destructive-icon" ||
      variant === "destructive-icon-filled" ||
      variant === "destructive-icon-outlined"
    )
      return "hidden";
    if (variant === "link") return "inline-block";

    if (showTextOnMobile) {
      return "inline-block";
    }

    if (showTextOnSm) {
      return "inline-block";
    }

    return `hidden sm:inline-block`;
  };

  // Base styles
  const baseStyles = `
    flex items-center justify-center
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    ${fullWidth ? "w-full" : "w-max"}
    ${disabled && !loading ? "opacity-50 cursor-not-allowed" : ""}
    ${loading ? "cursor-wait" : "cursor-pointer"}
    ${sizeStyles[size].gap}
    ${getRoundedClass()}
  `;

  // Link specific styles
  const getLinkStyles = () => {
    if (variant !== "link") return "";
    return `
      ${colorStyles[color].link}
      ${sizeStyles[size].link}
      bg-transparent
      p-0
      ${fullWidth ? "w-full justify-center" : ""}
    `;
  };

  // Variant-specific styles
  const getVariantStyles = () => {
    if (variant === "link") return getLinkStyles();

    if (loading) {
      return `${colorStyles[color].loading} ${sizeStyles[size].button}`;
    }

    switch (variant) {
      case "filled":
        return `${colorStyles[color].filled} ${sizeStyles[size].button}`;
      case "outlined":
        return `${colorStyles[color].outlined} ${sizeStyles[size].button}`;
      case "flat":
        return `${colorStyles[color].flat} ${sizeStyles[size].button}`;
      case "destructive":
        return `${colorStyles[color].destructive} ${sizeStyles[size].button}`;
      case "reject":
        return `${colorStyles[color].reject} px-2 py-1 text-sm`;
      case "icon":
        return `${colorStyles[color].icon} ${sizeStyles[size].iconButton}`;
      case "icon-filled":
        return `${colorStyles[color].iconFilled} ${sizeStyles[size].iconButton}`;
      case "icon-outlined":
        return `${colorStyles[color].iconOutlined} ${sizeStyles[size].iconButton}`;
      case "destructive-icon":
        return `${colorStyles[color].destructiveIcon} ${sizeStyles[size].iconButton}`;
      case "destructive-icon-filled":
        return `${colorStyles[color].destructiveIconFilled} ${sizeStyles[size].iconButton}`;
      case "destructive-icon-outlined":
        return `${colorStyles[color].destructiveIconOutlined} ${sizeStyles[size].iconButton}`;
      default:
        return `${colorStyles[color].filled} ${sizeStyles[size].button}`;
    }
  };

  // Default loading spinner
  const DefaultLoadingSpinner = () => (
    <svg
      className={`animate-spin ${sizeStyles[size].loadingSpinner}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Clone and size the icon
  const sizedIcon =
    icon && !loading
      ? React.cloneElement(icon, {
          width: iconWidth,
          height: iconHeight,
          className: `flex-shrink-0 ${!icon.props.width && !icon.props.height ? sizeStyles[size].icon : ""} ${icon.props.className || ""}`,
        })
      : null;

  // Handle click with loading prevention
  const handleClick = (e) => {
    if (disabled || loading) return;
    if (onClick) {
      onClick(e);
    }
  };

  // Render button content
  const renderButtonContent = () => (
    <>
      {loading && (loadingComponent || <DefaultLoadingSpinner />)}
      {!loading && iconPosition === "left" && sizedIcon}
      {(title || tooltipText) && (
        <span className={getTextResponsiveClass()}>
          {loading ? loadingText : title || tooltipText}
        </span>
      )}
      {!loading && iconPosition === "right" && sizedIcon}
    </>
  );

  // Render link button
  const renderLink = () => {
    const linkClasses = `${baseStyles} ${getVariantStyles()} ${className}`;

    if (disabled || loading) {
      return (
        <span className={linkClasses} aria-disabled="true">
          {renderButtonContent()}
        </span>
      );
    }

    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={handleClick}
        className={linkClasses}
      >
        {renderButtonContent()}
      </a>
    );
  };

  // Render regular button
  const renderButton = () => {
    const buttonType = type;

    if (variant === "flat" || variant === "reject") {
      return (
        <button
          type={buttonType}
          onClick={handleClick}
          disabled={disabled || loading}
          className={`${baseStyles} ${getVariantStyles()} ${className}`}
        >
          {renderButtonContent()}
        </button>
      );
    }

    return (
      <Button
        type={buttonType}
        onClick={handleClick}
        disabled={disabled || loading}
        className={`${baseStyles} ${getVariantStyles()} ${className}`}
      >
        {renderButtonContent()}
      </Button>
    );
  };

  // Render icon-only button
  const renderIconOnly = () => (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${getVariantStyles()} ${className}`}
      aria-label={finalTooltipText}
    >
      {loading ? loadingComponent || <DefaultLoadingSpinner /> : sizedIcon}
    </button>
  );

  // Get tooltip visibility classes
  const getTooltipVisibilityClass = () => {
    if (showTooltipOnDesktop) return "";
    if (showTooltipOnMobile) return "block md:hidden";
    return "hidden";
  };

  // Render with tooltip wrapper
  const renderWithTooltip = (children) => {
    if (!shouldShowTooltip()) return children;

    return (
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={tooltipSide}
          className={`${getTooltipVisibilityClass()} bg-gray-800 text-white`}
        >
          <p className="w-full text-wrap max-w-xs">{finalTooltipText}</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  // Determine which component to render
  const renderComponent = () => {
    // Link variant
    if (variant === "link" && href) {
      return renderLink();
    }

    // Icon variants (including destructive icon variants)
    if (
      variant === "icon" ||
      variant === "icon-filled" ||
      variant === "icon-outlined" ||
      variant === "destructive-icon" ||
      variant === "destructive-icon-filled" ||
      variant === "destructive-icon-outlined"
    ) {
      return renderIconOnly();
    }

    // Regular button
    return renderButton();
  };

  return renderWithTooltip(renderComponent());
};

export default ButtonComponent;
