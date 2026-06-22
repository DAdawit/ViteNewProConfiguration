import {
  AlertCircleIcon,
  SettingsIcon,
  UserIcon,
  X,
  XIcon,
} from "lucide-react";
import ButtonIconOutlinedPrimary from "./Buttons/ButtonIconOutlinedPrimary";
import ButtonPrimaryFilled from "./Buttons/ButtonPrimaryFilled";
import ButtonPrimaryOutlined from "./Buttons/ButtonPrimaryOutlined";
import ButtonPrimaryDestructive from "./Buttons/ButtonPrimaryDestructive";
import ButtonComponent from "./Buttons/ButtonComponent";
import ButtonExamples from "../ButtonExamples";
import UploadSection from "../UploadSection";
import BasicUploadWithPreview from "../BasicUploadWithPreview";
import AccordionExamples from "../AccordionExamples";

const Buttons = () => {
  return (
    <div>
      <ButtonExamples />
      <BasicUploadWithPreview />
      {/* <UploadSection /> */}
      <AccordionExamples />
    </div>
  );
};

export default Buttons;
