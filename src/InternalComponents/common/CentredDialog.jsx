import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog3";

export default function CentredDialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  maxWidth = "sm:max-w-md",
  showCloseButton = true,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`${maxWidth} mx-auto`}
        showCloseButton={showCloseButton}
      >
        {(title || description) && (
          <DialogHeader>
            {title && (
              <DialogTitle className="text-center">{title}</DialogTitle>
            )}
            {description && (
              <DialogDescription className="text-center">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
        )}

        <div className="py-4 px-1">{children}</div>

        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
}
