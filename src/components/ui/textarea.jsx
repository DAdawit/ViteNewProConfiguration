import * as React from "react";

function Textarea({ className, rows, ...props }) {
  return (
    <textarea
      rows={rows}
      data-slot="textarea"
      className={`p-4 rounded-lg ${className}`}
      {...props}
    />
  );
}

export { Textarea };
