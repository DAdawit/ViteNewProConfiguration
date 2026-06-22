import { CircleAlert } from "lucide-react";
import React from "react";

const Danger = ({ message }) => {
  return (
    <div className="flex items-center gap-2 border-0.5 rounded-lg h-12 border-destructive-300 bg-destructive-50 p-4">
      <span className="text-destructive-500">
        <CircleAlert />
      </span>
      <span>{message || "An error occurred. Please try again."}</span>
    </div>
  );
};

export default Danger;
