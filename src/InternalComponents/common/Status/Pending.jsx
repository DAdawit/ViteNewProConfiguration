import React from "react";

const Pending = ({ text }) => {
  return (
    <h4 className="text-warning-900 bg-warning-50 rounded-[10px] px-2 py-1 w-max text-center">
      {text}
    </h4>
  );
};

export default Pending;
