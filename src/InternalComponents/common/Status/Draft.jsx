import React from "react";

const Draft = ({ text }) => {
  return (
    <h4 className="text-neutral-900 text-sm px-3 py-1 bg-neutral-50 w-max rounded-full border-0 text-center">
      {text}
    </h4>
  );
};

export default Draft;
