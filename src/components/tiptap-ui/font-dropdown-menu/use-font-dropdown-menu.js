"use client";
import { useEffect, useMemo, useState } from "react"

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"

// --- Icons ---
import { FontIcon } from "@/components/tiptap-icons/font-icon"

// --- Tiptap UI ---
import {
  DEFAULT_FONTS,
  canToggle,
  isFontActive,
  normalizeFontOption,
  shouldShowButton,
} from "@/components/tiptap-ui/font-button";

/**
 * Gets the currently active font family from the available options
 */
export function getActiveFont(editor, fonts = DEFAULT_FONTS) {
  if (!editor || !editor.isEditable) return undefined

  const current = editor.getAttributes("textStyle")?.fontFamily
  if (!current) return undefined

  const normalizedFonts = fonts.map(normalizeFontOption)
  return (
    normalizedFonts.find((font) => font.value === current) ?? {
      label: current,
      value: current,
    }
  )
}

/**
 * Custom hook that provides font dropdown menu functionality for Tiptap editor
 */
export function useFontDropdownMenu(config) {
  const {
    editor: providedEditor,
    fonts = DEFAULT_FONTS,
    hideWhenUnavailable = false,
  } = config || {}

  const { editor } = useTiptapEditor(providedEditor)
  const [isVisible, setIsVisible] = useState(true)

  const normalizedFonts = useMemo(
    () =>
      (fonts ?? DEFAULT_FONTS)
        .map(normalizeFontOption)
        .filter((font) => Boolean(font.value)),
    [fonts]
  )

  const activeFont = getActiveFont(editor, normalizedFonts)
  const isActive = isFontActive(editor, activeFont?.value)
  const canToggleState = canToggle(editor)

  useEffect(() => {
    if (!editor) return

    const handleSelectionUpdate = () => {
      setIsVisible(
        shouldShowButton({ editor, hideWhenUnavailable }) &&
          normalizedFonts.length > 0
      )
    }

    handleSelectionUpdate()

    editor.on("selectionUpdate", handleSelectionUpdate)

    return () => {
      editor.off("selectionUpdate", handleSelectionUpdate)
    };
  }, [editor, hideWhenUnavailable, normalizedFonts])

  return {
    isVisible,
    activeFont,
    isActive,
    canToggle: canToggleState,
    fonts: normalizedFonts,
    label: "Font",
    Icon: activeFont?.Icon ?? FontIcon,
  }
}
