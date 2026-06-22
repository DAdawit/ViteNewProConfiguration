import React from "react";

const RecordCount = ({
  title,
  total,
  bg = "bg-primary-100",
  color = "text-primary-900",
  size = "custom-text-14",
  bold = "font-normal",
  loading = false,
}) => {
  if (loading) {
    return (
      <div
        className={`${color} ${bold} ${size} gap-2 flex justify-center items-center whitespace-nowrap text-black dark:text-white capitalize`}
      >
        <span className="hidden md:block font-bold">{title}: </span>
        <span
          className={`${bg} min-w-5 flex justify-center items-center p-3 h-5 rounded-full`}
        >
          <div className="w-4 h-3 bg-white/50 rounded animate-pulse" />
        </span>
      </div>
    );
  }

  return (
    <div
      className={`${color} ${bold} ${size} gap-2 flex justify-center items-center whitespace-nowrap capitalize`}
    >
      <span className="font-bold">{title}: </span>
      <span
        className={`${bg} min-w-5 flex justify-center items-center p-3 h-5 rounded-full`}
      >
        {total}
      </span>
    </div>
  );
};

export default RecordCount;
