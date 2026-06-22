import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Form label component
 * @param {Object} props
 * @param {boolean} props.required - Whether field is required
 * @param {string} props.className - Additional CSS classes
 */
const FormLabel = React.forwardRef(({ className, required, children, ...props }, ref) => {
  return (
    <label ref={ref} className={cn("block text-sm font-medium text-neutral-700 mb-1.5", className)} {...props}>
      {children}
      {required && <span className="text-danger ml-0.5">*</span>}
    </label>
  )
})
FormLabel.displayName = "FormLabel"

export { FormLabel }
