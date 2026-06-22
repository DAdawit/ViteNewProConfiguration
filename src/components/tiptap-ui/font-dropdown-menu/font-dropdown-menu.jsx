import { forwardRef, useCallback, useState } from "react"

// --- Icons ---
import { ChevronDownIcon } from "@/components/tiptap-icons/chevron-down-icon"

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"

// --- Tiptap UI ---
import { FontButton } from "@/components/tiptap-ui/font-button"
import { useFontDropdownMenu } from "@/components/tiptap-ui/font-dropdown-menu"

import { Button, ButtonGroup } from "@/components/tiptap-ui-primitive/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/tiptap-ui-primitive/dropdown-menu"
import { Card, CardBody } from "@/components/tiptap-ui-primitive/card"

/**
 * Dropdown menu component for selecting font families in a Tiptap editor.
 *
 * For custom dropdown implementations, use the `useFontDropdownMenu` hook instead.
 */
export const FontDropdownMenu = forwardRef((
  {
    editor: providedEditor,
    fonts,
    hideWhenUnavailable = false,
    portal = false,
    onOpenChange,
    ...buttonProps
  },
  ref
) => {
  const { editor } = useTiptapEditor(providedEditor)
  const [isOpen, setIsOpen] = useState(false)
  const {
    isVisible,
    isActive,
    canToggle,
    Icon,
    fonts: normalizedFonts,
    activeFont,
  } = useFontDropdownMenu({
    editor,
    fonts,
    hideWhenUnavailable,
  })

  const handleOpenChange = useCallback((open) => {
    if (!editor || !canToggle) return
    setIsOpen(open)
    onOpenChange?.(open)
  }, [canToggle, editor, onOpenChange])

  if (!isVisible) {
    return null
  }

  return (
    <DropdownMenu modal open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          data-style="ghost"
          data-active-state={isActive ? "on" : "off"}
          role="button"
          tabIndex={-1}
          disabled={!canToggle}
          data-disabled={!canToggle}
          aria-label="Change font family"
          aria-pressed={isActive}
          tooltip={activeFont?.label ?? "Font"}
          {...buttonProps}
          ref={ref}>
          <Icon className="tiptap-button-icon" />
          <span
            className="tiptap-button-text"
            style={{ fontFamily: activeFont?.value }}>
            {activeFont?.label ?? "Font"}
          </span>
          <ChevronDownIcon className="tiptap-button-dropdown-small" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" portal={portal}>
        <Card>
          <CardBody>
            <ButtonGroup>
              {normalizedFonts.map((font) => (
                <DropdownMenuItem key={`font-${font.value}`} asChild>
                  <FontButton
                    editor={editor}
                    font={font}
                    fontFamily={font.value}
                    text={font.label}
                    showTooltip={false} />
                </DropdownMenuItem>
              ))}
            </ButtonGroup>
          </CardBody>
        </Card>
      </DropdownMenuContent>
    </DropdownMenu>
  );
})

FontDropdownMenu.displayName = "FontDropdownMenu"

export default FontDropdownMenu
