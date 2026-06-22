import React from "react";

import { IoInformationCircleOutline } from "react-icons/io5";

const NoResultFound = ({
  title,
  icon = <IoInformationCircleOutline size={24} />,
}) => {
  return (
    <div className="w-full capitalize p-10 text-sm bg-destructive-100 text-destructive-900 py-2 px-4 rounded-md  flex items-center gap-2">
      {icon} <span>{title}</span>
    </div>
  );
};

export default NoResultFound;
