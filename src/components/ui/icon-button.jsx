import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-800 text-white hover:bg-primary-dark focus-visible:ring-primary",
        ghost: "hover:bg-neutral-100 focus-visible:ring-neutral-400",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "md",
    },
  }
);

/**
 * Icon-only button component
 * @param {Object} props
 * @param {('primary'|'ghost')} props.variant - Button style variant
 * @param {('sm'|'md'|'lg')} props.size - Button size
 */
const IconButton = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
