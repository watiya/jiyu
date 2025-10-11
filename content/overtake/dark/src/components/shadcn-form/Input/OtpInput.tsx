import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Otpinput from "./code/OtpInputCode";
import OtpInputCode from "./code/OtpInputCode.tsx?raw";

const OtpInput = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">OTP Input</h4>
        <Otpinput/>
      </div>
      <CodeDialog>{OtpInputCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default OtpInput;
