import CardBox from "src/components/shared/CardBox";
import Disablecheck from "./Codes/DisableCheckCode";
import DisableCheckCode from "./Codes/DisableCheckCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const DisableCheckBox = () => {

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Disable Checkbox</h4>
          <Disablecheck />
        </div>
        <CodeDialog>{DisableCheckCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableCheckBox;
