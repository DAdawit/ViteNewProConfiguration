import { cn } from "@/lib/utils";

/**
 * Responsive two-column form grid
 * @param {Object} props
 * @param {React.ReactNode} props.children - Form fields
 * @param {string} props.className - Additional CSS classes
 */
const FormGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};
FormGrid.displayName = "FormGrid";

export { FormGrid };
