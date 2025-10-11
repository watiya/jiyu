import CardBox from "src/components/shared/CardBox";
import Dropdownposition from "./Codes/DropdownPositionCode";
import DropdownPositionCode from "./Codes/DropdownPositionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const DropDownPosition = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Position</h4>
          <Dropdownposition />
        </div>
        <CodeDialog>{DropdownPositionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DropDownPosition;
