import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(-1)} className="cursor-pointer">
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
};

export default GoBack;
