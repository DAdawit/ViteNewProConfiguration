import { Loader2 } from "lucide-react";
const LoadingSpinner = ({ name }) => {
  return (
    <div className="flex gap-1 items-center">
      <Loader2 className="animate-spin text-primary-700" />
      {` ${name}...`}
    </div>
  );
};

export default LoadingSpinner;
