import { forwardRef, useCallback } from "react";

// --- Lib ---
import { parseShortcutKeys } from "@/lib/tiptap-utils";

import { useFont } from "@/components/tiptap-ui/font-button";
import { Check } from "lucide-react";

import { Button } from "@/components/tiptap-ui-primitive/button";
import { Badge } from "@/components/tiptap-ui-primitive/badge";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

export function FontShortcutBadge({ shortcutKeys }) {
  if (!shortcutKeys) return null;
  return <Badge>{parseShortcutKeys({ shortcutKeys })}</Badge>;
}

/**
 * Button component for toggling font family in a Tiptap editor.
 *
 * For custom button implementations, use the `useFont` hook instead.
 */
export const FontButton = forwardRef(
  (
    {
      editor: providedEditor,
      font,
      fontFamily,
      text,
      hideWhenUnavailable = false,
      onToggled,
      showShortcut = false,
      onClick,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const {
      isVisible,
      canToggle,
      isActive,
      handleToggle,
      label,
      Icon,
      shortcutKeys,
    } = useFont({
      editor,
      font,
      fontFamily,
      hideWhenUnavailable,
      onToggled,
    });

    const displayText = text ?? label;
    const handleClick = useCallback(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        handleToggle();
      },
      [handleToggle, onClick]
    );

    if (!isVisible) {
      return null;
    }

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
              <span
                className="tiptap-button-text"
                style={{ fontFamily: fontFamily ?? font?.value }}
              >
                {displayText}
              </span>
            )}
            {isActive && <Check className="tiptap-button-icon" />}
            {showShortcut && shortcutKeys && (
              <FontShortcutBadge shortcutKeys={shortcutKeys} />
            )}
          </>
        )}
      </Button>
    );
  }
);

FontButton.displayName = "FontButton";
