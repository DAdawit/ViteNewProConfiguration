import { forwardRef, useCallback, useState } from "react";

// --- Icons (Lucide) ---
import {
  Table,
  Plus,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Trash2,
  TableCellsMerge,
  TableCellsSplit,
  Pin,
  Settings,
  ArrowRight as ArrowNext,
  ArrowLeft as ArrowPrevious,
} from "lucide-react";

import { ChevronDownIcon } from "@/components/tiptap-icons/chevron-down-icon";

// --- Hooks ---
import { useTiptapEditor } from "@/hooks/use-tiptap-editor";
import { useTableDropdownMenu } from "@/components/tiptap-ui/table-dropdown-menu/use-table-dropdown-menu";

// --- UI Primitives ---
import { Button } from "@/components/tiptap-ui-primitive/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/tiptap-ui-primitive/dropdown-menu";
import { Card, CardBody } from "@/components/tiptap-ui-primitive/card";

/**
 * Dropdown menu component exposing table-related commands from `@tiptap/extension-table`.
 *
 * Refactored to use Lucide icons for enhanced visual consistency.
 */
export const TableDropdownMenu = forwardRef(
  (
    {
      editor: providedEditor,
      hideWhenUnavailable = false,
      portal = false,
      onOpenChange,
      ...buttonProps
    },
    ref
  ) => {
    const { editor } = useTiptapEditor(providedEditor);
    const [isOpen, setIsOpen] = useState(false);

    const { isVisible, isActive, canToggle } = useTableDropdownMenu({
      editor,
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

    if (!isVisible) {
      return null;
    }

    const run = (fn) => {
      if (!editor) return;
      fn(editor.chain().focus()).run();
    };

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
            aria-label="Table options"
            aria-pressed={isActive}
            tooltip="Table"
            {...buttonProps}
            ref={ref}
          >
            <span className="tiptap-button-text">Table</span>
            <ChevronDownIcon className="tiptap-button-dropdown-small" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" portal={portal}>
          <Card>
            <CardBody>
              <div className="tiptap-table-dropdown-grid gap-y-2">
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={
                    !editor ||
                    (typeof editor.can?.().insertTable === "function" &&
                      !editor.can().insertTable({
                        rows: 3,
                        cols: 3,
                        withHeaderRow: true,
                      }))
                  }
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) =>
                      chain.insertTable({
                        rows: 3,
                        cols: 3,
                        withHeaderRow: true,
                      })
                    );
                  }}
                >
                  <Table
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Insert table</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().addColumnBefore?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.addColumnBefore());
                  }}
                >
                  <ArrowLeft
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Add column before</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().addColumnAfter?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.addColumnAfter());
                  }}
                >
                  <ArrowRight
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Add column after</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().deleteColumn?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.deleteColumn());
                  }}
                >
                  <Trash2
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Delete column</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().addRowBefore?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.addRowBefore());
                  }}
                >
                  <ArrowUp
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Add row before</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().addRowAfter?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.addRowAfter());
                  }}
                >
                  <ArrowDown
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Add row after</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().deleteRow?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.deleteRow());
                  }}
                >
                  <Trash2
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Delete row</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().deleteTable?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.deleteTable());
                  }}
                >
                  <Trash2
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Delete table</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().mergeCells?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.mergeCells());
                  }}
                >
                  <TableCellsMerge
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Merge cells</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().splitCell?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.splitCell());
                  }}
                >
                  <TableCellsSplit
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Split cell</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().toggleHeaderColumn?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.toggleHeaderColumn());
                  }}
                >
                  <Pin
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Toggle header column</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().toggleHeaderRow?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.toggleHeaderRow());
                  }}
                >
                  <Pin
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Toggle header row</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().toggleHeaderCell?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.toggleHeaderCell());
                  }}
                >
                  <Pin
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Toggle header cell</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().mergeOrSplit?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.mergeOrSplit());
                  }}
                >
                  <TableCellsMerge
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />{" "}
                  {/* Fallback; could alternate with split if desired */}
                  <span>Merge or split</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={
                    !editor || !editor.can().setCellAttribute?.("colspan", 2)
                  }
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.setCellAttribute("colspan", 2));
                  }}
                >
                  <Settings
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Set cell attribute</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().fixTables?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.fixTables());
                  }}
                >
                  <Settings
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Fix tables</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().goToNextCell?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.goToNextCell());
                  }}
                >
                  <ArrowNext
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Go to next cell</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  disabled={!editor || !editor.can().goToPreviousCell?.()}
                  onSelect={(event) => {
                    event.preventDefault();
                    run((chain) => chain.goToPreviousCell());
                  }}
                >
                  <ArrowPrevious
                    className="w-4 h-4 mr-2"
                    strokeWidth={1.5}
                    opacity={0.95}
                  />
                  <span>Go to previous cell</span>
                </DropdownMenuItem>
              </div>
            </CardBody>
          </Card>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

TableDropdownMenu.displayName = "TableDropdownMenu";

export default TableDropdownMenu;
