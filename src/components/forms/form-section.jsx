import { cn } from "@/lib/utils";

/**
 * Form section container with optional title
 * @param {Object} props
 * @param {string} props.title - Section title
 * @param {React.ReactNode} props.children - Form fields
 * @param {string} props.className - Additional CSS classes
 */
const FormSection = ({ title, children, className, ...props }) => {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {title && (
        <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
      )}
      {children}
    </div>
  );
};
FormSection.displayName = "FormSection";

export { FormSection };
