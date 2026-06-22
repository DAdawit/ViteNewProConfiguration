import { forwardRef, useCallback } from "react";

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

// --- UI ---
import { Button } from "@/components/tiptap-ui-primitive/button";

/**
 * Simple button component for inserting a table into the editor.
 *
 * This is not currently wired into the toolbar, but it can be used anywhere
 * you want a single “Insert table” button instead of the full dropdown.
 */
export const TableButton = forwardRef(
  (
    {
      editor: providedEditor,
      rows = 3,
      cols = 3,
      withHeaderRow = true,
      text = "Insert table",
      hideWhenUnavailable = false,
      onClick,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const { editor } = useTiptapEditor(providedEditor);

    const handleClick = useCallback(
      (event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        if (!editor) return;

        editor
          .chain()
          .focus()
          .insertTable({ rows, cols, withHeaderRow })
          .run();
      },
      [cols, editor, onClick, rows, withHeaderRow]
    );

    if (!editor) {
      return null;
    }

    const canInsertTable =
      typeof editor.can?.().insertTable === "function"
        ? editor.can().insertTable({ rows, cols, withHeaderRow })
        : editor.isEditable;

    if (hideWhenUnavailable && !canInsertTable) {
      return null;
    }

    return (
      <Button
        type="button"
        data-style="ghost"
        role="button"
        tabIndex={-1}
        disabled={!canInsertTable}
        data-disabled={!canInsertTable}
        aria-label={text}
        tooltip={text}
        onClick={handleClick}
        {...buttonProps}
        ref={ref}
      >
        {children ?? <span className="tiptap-button-text">{text}</span>}
      </Button>
    );
  }
);

TableButton.displayName = "TableButton";

