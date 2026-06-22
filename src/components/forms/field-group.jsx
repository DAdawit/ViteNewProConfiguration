import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { FormLabel } from "@/components/ui/form-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Multilingual field group with language tabs
 * @param {Object} props
 * @param {string} props.label - Field label
 * @param {boolean} props.required - Whether field is required
 * @param {string[]} props.languages - Array of language codes (e.g., ['en', 'am', 'or'])
 * @param {Object} props.values - Object with language codes as keys and values
 * @param {Function} props.onChange - Change handler (lang, value) => void
 * @param {('input'|'textarea')} props.type - Field type
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.className - Additional CSS classes
 */
const FieldGroup = ({
  label,
  required = false,
  languages = ["en"],
  values = {},
  onChange,
  type = "input",
  placeholder,
  className,
  ...props
}) => {
  const [activeTab, setActiveTab] = React.useState(languages[0]);

  const InputComponent = type === "textarea" ? Textarea : Input;

  // For single language, don't show tabs
  if (languages.length === 1) {
    return (
      <div className={cn("space-y-1.5", className)} {...props}>
        <FormLabel required={required}>{label}</FormLabel>
        <InputComponent
          value={values[languages[0]] || ""}
          onChange={(e) => onChange?.(languages[0], e.target.value)}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div className={cn("space-y-1.5", className)} {...props}>
      <FormLabel required={required}>{label}</FormLabel>
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex gap-1 border-b border-neutral-200 mb-2">
          {languages.map((lang) => (
            <Tabs.Trigger
              key={lang}
              value={lang}
              className={cn(
                "px-3 py-1.5 text-sm font-medium transition-colors",
                "border-b-2 -mb-px",
                "hover:text-neutral-900",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                activeTab === lang
                  ? "border-primary text-primary"
                  : "border-transparent text-neutral-500"
              )}
            >
              {lang.toUpperCase()}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {languages.map((lang) => (
          <Tabs.Content key={lang} value={lang}>
            <InputComponent
              value={values[lang] || ""}
              onChange={(e) => onChange?.(lang, e.target.value)}
              placeholder={placeholder}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
};
FieldGroup.displayName = "FieldGroup";

export { FieldGroup };
