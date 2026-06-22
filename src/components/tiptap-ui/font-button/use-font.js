"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";

// --- Icons ---
import { FontIcon } from "@/components/tiptap-icons/font-icon";

// --- Lib ---
import { isExtensionAvailable } from "@/lib/tiptap-utils";

export const DEFAULT_FONTS = [
  {
    label: "Century Gothic",
    value: "Century Gothic, sans-serif",
  },
  {
    label: "Ebrima",
    value: "Ebrima, sans-serif",
  },
  {
    label: "Poppins",
    value: "Poppins, sans-serif",
  },
  {
    label: "Noto Sans Ethiopic",
    value: "NotoSansEthiopic, sans-serif",
  },
];

export function normalizeFontOption(font) {
  if (!font) return { label: "Font", value: "" };
  if (typeof font === "string") {
    return { label: font, value: font };
  }
  const { label, value } = font;
  const resolvedValue = value ?? label ?? "";
  return { label: label ?? value ?? "Font", value: resolvedValue };
}

/**
 * Checks if font family commands are available in the current editor state
 */
export function canToggle(editor) {
  if (!editor || !editor.isEditable) return false;
  return (
    isExtensionAvailable(editor, ["textStyle", "fontFamily"]) &&
    typeof editor.commands?.setFontFamily === "function"
  );
}

/**
 * Checks if a given font family is currently active
 */
export function isFontActive(editor, fontFamily) {
  if (!editor || !editor.isEditable) return false;

  if (!fontFamily) {
    const activeFamily = editor.getAttributes("textStyle")?.fontFamily;
    return Boolean(activeFamily);
  }

  return editor.isActive("textStyle", { fontFamily });
}

/**
 * Toggles (sets/unsets) the font family on the current selection
 */
export function toggleFontFamily(editor, fontFamily) {
  if (!editor || !editor.isEditable || !fontFamily) return false;

  const isActive = isFontActive(editor, fontFamily);
  const chain = editor.chain().focus();
  const command = isActive
    ? chain.unsetFontFamily()
    : chain.setFontFamily(fontFamily);

  return command.run();
}

/**
 * Determines if the font button should be shown
 */
export function shouldShowButton(props) {
  const { editor, hideWhenUnavailable } = props;

  if (!editor || !editor.isEditable) return false;
  if (hideWhenUnavailable) {
    return canToggle(editor);
  }

  return true;
}

/**
 * Custom hook that provides font family functionality for the Tiptap editor
 */
export function useFont(config) {
  const {
    editor: providedEditor,
    font,
    fontFamily,
    hideWhenUnavailable = false,
    onToggled,
  } = config;

  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = useState(true);

  const normalizedFont = useMemo(
    () => normalizeFontOption(font ?? fontFamily),
    [font, fontFamily]
  );

  const targetFamily = normalizedFont.value;
  const canToggleState = canToggle(editor) && Boolean(targetFamily);
  const isActive = isFontActive(editor, targetFamily);

  useEffect(() => {
    if (!editor) return;

    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowButton({ editor, hideWhenUnavailable }) &&
          Boolean(targetFamily)
      );
    };

    handleSelectionUpdate();

    editor.on("selectionUpdate", handleSelectionUpdate);

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate);
    };
  }, [editor, hideWhenUnavailable, targetFamily]);

  const handleToggle = useCallback(() => {
    if (!editor || !targetFamily) return false;

    const success = toggleFontFamily(editor, targetFamily);
    if (success) {
      onToggled?.();
    }
    return success;
  }, [editor, onToggled, targetFamily]);

  return {
    isVisible,
    isActive,
    handleToggle,
    canToggle: canToggleState,
    label: normalizedFont.label,
    fontFamily: targetFamily,
    shortcutKeys: font?.shortcutKeys,
    Icon: font?.Icon ?? FontIcon,
  };
}
