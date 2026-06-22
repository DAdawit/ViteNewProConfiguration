"use client";
import { useEffect, useState } from "react";

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

/**
 * Simple hook for controlling visibility/active state of the table dropdown.
 *
 * This mirrors the shape of other `use*DropdownMenu` hooks but is tailored
 * to table commands from `@tiptap/extension-table`.
 */
export function useTableDropdownMenu(config) {
  const {
    editor: providedEditor,
    hideWhenUnavailable = false,
  } = config || {};

  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = useState(true);

  const isActive = !!editor && editor.isActive("table");

  // We consider the dropdown "toggleable" whenever the editor is editable.
  const canToggle = !!editor && editor.isEditable;

  useEffect(() => {
    if (!editor) return;

    const handleSelectionUpdate = () => {
      if (!editor.isEditable) {
        setIsVisible(false);
        return;
      }

      if (hideWhenUnavailable) {
        // Hide the button completely if we can't insert a table at the current position.
        const canInsertTable =
          typeof editor.can?.().insertTable === "function"
            ? editor.can().insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            : true;

        setIsVisible(canInsertTable);
      } else {
        setIsVisible(true);
      }
    };

    handleSelectionUpdate();

    editor.on("selectionUpdate", handleSelectionUpdate);

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable]);

  return {
    isVisible,
    isActive,
    canToggle,
    label: "Table",
  };
}


