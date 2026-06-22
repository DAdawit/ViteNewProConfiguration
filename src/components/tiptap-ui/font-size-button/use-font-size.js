"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import { isMarkInSchema } from "@/lib/tiptap-utils";
import { FontIcon } from "@/components/tiptap-icons/font-icon";

/**
 * Default font-size options (in px). Adjust as needed.
 */
export const DEFAULT_FONT_SIZES = [
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
];

/**
 * All sizes share the same icon for now (extensible).
 */
export const fontSizeIcons = Object.fromEntries(
  DEFAULT_FONT_SIZES.map((opt) => [opt.label, FontIcon])
);

export function normalizeFontSizeOption(option) {
  if (!option) return { label: "Font size", value: null };
  if (typeof option === "number" || typeof option === "string") {
    const num = Number(option);
    if (Number.isNaN(num)) return { label: String(option), value: null };
    return { label: String(num), value: num };
  }
  const { label, value } = option;
  const resolvedValue = value ?? Number(label);
  return {
    label: label ?? String(resolvedValue ?? "Font size"),
    value: typeof resolvedValue === "number" ? resolvedValue : null,
  };
}

export function canToggle(editor) {
  if (!editor || !editor.isEditable) return false;
  return (
    isMarkInSchema("textStyle", editor) &&
    typeof editor.commands?.setFontSize === "function"
  );
}

export function getActiveFontSize(editor) {
  if (!editor || !editor.isEditable) return null;
  const raw = editor.getAttributes("textStyle")?.fontSize;
  if (!raw) return null;
  const match = String(raw).match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

export function isFontSizeActive(editor, fontSize) {
  if (!editor || !editor.isEditable) return false;
  const active = getActiveFontSize(editor);
  if (fontSize == null) return active != null;
  return Number(active) === Number(fontSize);
}

export function toggleFontSize(editor, fontSize) {
  if (!editor || !editor.isEditable || fontSize == null) return false;
  return editor.chain().focus().setFontSize(`${fontSize}px`).run();
}

export function shouldShowButton({ editor, hideWhenUnavailable }) {
  if (!editor || !editor.isEditable) return false;
  return hideWhenUnavailable ? canToggle(editor) : true;
}

export function useFontSize(config) {
  const {
    editor: providedEditor,
    fontSize: providedSize,
    hideWhenUnavailable = false,
    onToggled,
  } = config || {};

  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = useState(true);

  const normalizedOption = useMemo(
    () => normalizeFontSizeOption(providedSize),
    [providedSize]
  );

  const targetFontSize = normalizedOption.value;
  const canToggleState = canToggle(editor) && targetFontSize != null;
  const isActive = isFontSizeActive(editor, targetFontSize);

  useEffect(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowButton({ editor, hideWhenUnavailable }) &&
          targetFontSize != null
      );
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => editor.off("selectionUpdate", handleSelectionUpdate);
  }, [editor, hideWhenUnavailable, targetFontSize]);

  const handleToggle = useCallback(() => {
    if (!editor || targetFontSize == null) return false;
    const success = toggleFontSize(editor, targetFontSize);
    if (success) onToggled?.();
    return success;
  }, [editor, targetFontSize, onToggled]);

  const label = `Font size ${normalizedOption.label}`;
  const key = normalizedOption.label;

  return {
    isVisible,
    isActive,
    handleToggle,
    canToggle: canToggleState,
    label,
    fontSize: targetFontSize,
    Icon: fontSizeIcons[key] ?? FontIcon,
  };
}
