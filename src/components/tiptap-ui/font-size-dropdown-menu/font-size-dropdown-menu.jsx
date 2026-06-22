import { forwardRef, useCallback, useState } from "react";
import { ChevronDownIcon } from "@/components/tiptap-icons/chevron-down-icon";
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import { FontSizeButton } from "@/components/tiptap-ui/font-size-button";
import { useFontSizeDropdownMenu } from "@/components/tiptap-ui/font-size-dropdown-menu";
import { Button, ButtonGroup } from "@/components/tiptap-ui-primitive/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/tiptap-ui-primitive/dropdown-menu";
import { Card, CardBody } from "@/components/tiptap-ui-primitive/card";
import {
  DEFAULT_FONT_SIZES,
  normalizeFontSizeOption,
} from "@/components/tiptap-ui/font-size-button";

export const FontSizeDropdownMenu = forwardRef(
  (
    {
      editor: providedEditor,
      fontSizes = DEFAULT_FONT_SIZES,
      hideWhenUnavailable = false,
      portal = false,
      onOpenChange,
      ...buttonProps
    },
    ref
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = useState(false);
    const { isVisible, isActive, canToggle, Icon, activeOption } =
      useFontSizeDropdownMenu({
        editor,
        fontSizes,
        hideWhenUnavailable,
      });

    const handleOpenChange = useCallback(
      (open) => {
        if (!editor || !canToggle) return;
        setIsOpen(open);
        onOpenChange?.(open);
      },
      [canToggle, editor, onOpenChange]
    );

    if (!isVisible) return null;

    const normalizedOptions = (fontSizes ?? DEFAULT_FONT_SIZES)
      .map(normalizeFontSizeOption)
      .filter((option) => option.value != null);

    const displayLabel = activeOption
      ? `${activeOption.label}` // Remove "px"
      : "Font size";
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
            aria-label={displayLabel}
            aria-pressed={isActive}
            tooltip="Font size"
            {...buttonProps}
            ref={ref}
          >
            <Icon className="tiptap-button-icon" />
            <span className="tiptap-button-text">{displayLabel}</span>{" "}
            <ChevronDownIcon className="tiptap-button-dropdown-small" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" portal={portal}>
          <Card>
            <CardBody>
              <ButtonGroup>
                {normalizedOptions.map((option) => (
                  <DropdownMenuItem key={`font-size-${option.value}`} asChild>
                    <FontSizeButton
                      editor={editor}
                      fontSize={option.value}
                      text={option.label} // Displays e.g., "16" instead of "16px"
                      showTooltip={false}
                    />
                  </DropdownMenuItem>
                ))}
              </ButtonGroup>
            </CardBody>
          </Card>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

FontSizeDropdownMenu.displayName = "FontSizeDropdownMenu";
export default FontSizeDropdownMenu;
