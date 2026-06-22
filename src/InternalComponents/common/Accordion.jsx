import { ChevronDown, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const Accordion = ({
  children,
  headerTitle,
  headerLeftContent,
  headerRightContent,
  className,
  headerBg = "bg-neutral-100",
  defaultOpen = true,
  showIcon = true,
  iconType = "chevron", // chevron, plus-minus
  animated = true,
  size = "md", // sm, md, lg
  variant = "default", // default, bordered, shadow, minimal
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Size configurations
  const sizeStyles = {
    sm: {
      header: "px-3 py-2 text-sm",
      content: "p-2",
      title: "text-sm",
    },
    md: {
      header: "px-4 py-3 text-base",
      content: "p-3.5",
      title: "text-base",
    },
    lg: {
      header: "px-5 py-4 text-lg",
      content: "p-4",
      title: "text-lg",
    },
  };

  // Variant configurations
  const variantStyles = {
    default: {
      container: "border rounded-lg overflow-hidden",
      header: `border-b ${headerBg}`,
    },
    bordered: {
      container: "border-2 rounded-lg overflow-hidden",
      header: `border-b-2 ${headerBg}`,
    },
    shadow: {
      container: "border rounded-lg overflow-hidden shadow-lg",
      header: `border-b ${headerBg}`,
    },
    minimal: {
      container: "border-b",
      header: `${headerBg}`,
    },
  };

  // Icon configurations
  const getIcon = () => {
    if (!showIcon) return null;

    if (iconType === "plus-minus") {
      return isOpen ? (
        <Minus size={size === "sm" ? 16 : size === "lg" ? 24 : 20} />
      ) : (
        <Plus size={size === "sm" ? 16 : size === "lg" ? 24 : 20} />
      );
    }

    return (
      <ChevronDown
        className={`transition-all duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        size={size === "sm" ? 16 : size === "lg" ? 24 : 20}
      />
    );
  };

  return (
    <div className={`${variantStyles[variant].container} ${className}`}>
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between w-full 
          ${sizeStyles[size].header}
          ${variantStyles[variant].header}
          font-medium 
          transition-all duration-200
          hover:bg-opacity-80
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          ${isOpen ? "border-primary-200" : ""}
        `}
        aria-expanded={isOpen}
        aria-label={`Toggle ${headerTitle}`}
      >
        <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-8">
          <span
            className={`font-bold text-neutral-700 ${sizeStyles[size].title}`}
          >
            {headerTitle}
          </span>
          {headerLeftContent && (
            <span className="text-primary-700 hidden md:flex px-2 text-xs md:text-sm items-center gap-1 py-1 rounded-full bg-primary-50">
              {headerLeftContent}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {headerRightContent && (
            <div className="hidden md:block">{headerRightContent}</div>
          )}
          {getIcon()}
        </div>
      </button>

      {/* Accordion Content with Animation */}
      <div
        className={`
          ${sizeStyles[size].content}
          ${!animated && !isOpen ? "hidden" : ""}
          ${animated ? "overflow-hidden transition-all duration-300 ease-out" : ""}
        `}
        style={{
          ...(animated && {
            maxHeight: isOpen ? "1000px" : "0",
            opacity: isOpen ? 1 : 0,
            padding: isOpen ? undefined : "0",
          }),
        }}
      >
        {isOpen && children}
      </div>

      {/* Add animation keyframes to your global CSS or use style tag */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default Accordion;
