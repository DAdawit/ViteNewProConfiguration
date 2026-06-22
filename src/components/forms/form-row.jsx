import { cn } from "@/lib/utils";

/**
 * Vertical form field container
 * @param {Object} props
 * @param {React.ReactNode} props.children - Form field content
 * @param {string} props.className - Additional CSS classes
 */
const FormRow = ({ children, className, ...props }) => {
  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};
FormRow.displayName = "FormRow";

export { FormRow };
