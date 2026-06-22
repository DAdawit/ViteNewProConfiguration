import React from "react";

const FallbackComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-100 text-neutral-500 bg-neutral-50/50 rounded-lg border border-dashed border-neutral-200 m-5">
      <div className="text-center">
        <p className="font-medium">Component not yet implemented</p>
        <p className="text-xs">Please check the configuration in Hello.jsx</p>
      </div>
    </div>
  );
};

export default FallbackComponent;
