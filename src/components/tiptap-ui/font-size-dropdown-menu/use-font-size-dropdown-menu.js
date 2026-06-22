"use client";
import { useEffect, useState } from "react";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import { FontIcon } from "@/components/tiptap-icons/font-icon";
import {
  getActiveFontSize,
  canToggle,
  normalizeFontSizeOption,
  DEFAULT_FONT_SIZES,
  shouldShowButton,
} from "@/components/tiptap-ui/font-size-button";

export function getActiveFontSizeOption(
  editor,
  fontSizes = DEFAULT_FONT_SIZES
) {
  if (!editor || !editor.isEditable) return undefined;
  const active = getActiveFontSize(editor);
  if (active == null) return undefined;
  const normalized = (fontSizes ?? DEFAULT_FONT_SIZES)
    .map(normalizeFontSizeOption)
    .filter((o) => o.value != null);
  return normalized.find((o) => Number(o.value) === Number(active));
}

export function useFontSizeDropdownMenu(config) {
  const {
    editor: providedEditor,
    fontSizes = DEFAULT_FONT_SIZES,
    hideWhenUnavailable = false,
  } = config || {};

  const { editor } = useTiptapEditor(providedEditor);
  const [isVisible, setIsVisible] = useState(true);

  const activeOption = getActiveFontSizeOption(editor, fontSizes);
  const isActive = activeOption != null;
  const canToggleState = canToggle(editor);

  useEffect(() => {
    if (!editor) return;
    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowButton({ editor, hideWhenUnavailable }) &&
          Boolean(fontSizes?.length)
      );
    };
    handleSelectionUpdate();
    editor.on("selectionUpdate", handleSelectionUpdate);
    return () => editor.off("selectionUpdate", handleSelectionUpdate);
  }, [editor, hideWhenUnavailable, fontSizes]);

  return {
    isVisible,
    activeOption,
    isActive,
    canToggle: canToggleState,
    fontSizes,
    label: activeOption ? `Font size ${activeOption.label}` : "Font size",
    Icon: FontIcon,
  };
}
