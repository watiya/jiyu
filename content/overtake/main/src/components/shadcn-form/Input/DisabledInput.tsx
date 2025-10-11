import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import DisableinputWithButton from "./code/DisableInputWithButtonCode";
import DisableInputWithButtonCode from "./code/DisableInputWithButtonCode.tsx?raw";

const DisabledInput = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Disable Input</h4>
        <DisableinputWithButton />
      </div>
      <CodeDialog>{DisableInputWithButtonCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default DisabledInput;
