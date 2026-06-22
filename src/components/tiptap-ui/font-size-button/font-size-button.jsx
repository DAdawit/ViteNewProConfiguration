import { forwardRef, useCallback } from "react";
import { Button } from "@/components/tiptap-ui-primitive/button";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import { useFontSize } from "@/components/tiptap-ui/font-size-button";
import { Check } from "lucide-react";

export const FontSizeButton = forwardRef(
  (
    {
      editor: providedEditor,
      fontSize,
      text,
      hideWhenUnavailable = false,
      onToggled,
      onClick,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const { isVisible, canToggle, isActive, handleToggle, label, Icon } =
      useFontSize({
        editor,
        fontSize,
        hideWhenUnavailable,
        onToggled,
      });

    const handleClick = useCallback(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleToggle();
      },
      [handleToggle, onClick]
    );

    if (!isVisible) return null;

    const displayText = text ?? label;

    return (
      <Button
        type="button"
        data-style="ghost"
        data-active-state={isActive ? "on" : "off"}
        role="button"
        tabIndex={-1}
        disabled={!canToggle}
        data-disabled={!canToggle}
        aria-label={label}
        aria-pressed={isActive}
        tooltip={label}
        onClick={handleClick}
        {...buttonProps}
        ref={ref}
      >
        {children ?? (
          <>
            <Icon className="tiptap-button-icon" />
            {displayText && (
              <span className="tiptap-button-text">{displayText}</span>
            )}
            {isActive && <Check className="tiptap-button-icon" />}
          </>
        )}
      </Button>
    );
  }
);

FontSizeButton.displayName = "FontSizeButton";
