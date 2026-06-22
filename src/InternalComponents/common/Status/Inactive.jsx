import React from "react";

const InActive = ({ text }) => {
  return (
    <h4 className="text-destructive-900 text-sm bg-destructive-50 rounded-full px-3 py-1 border-0 w-fit">
      {text}
    </h4>
  );
};

export default InActive;
