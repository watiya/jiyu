import CardBox from "src/components/shared/CardBox";
import Basicdropdown from "./Codes/BasicDropdownCode";
import BasicDropdownCode from "./Codes/BasicDropdownCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const BasicDropdown = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Dropdown</h4>
          <Basicdropdown />
        </div>
        <CodeDialog>{BasicDropdownCode}</CodeDialog>
        </div>
        
      </CardBox>
    </div>
  );
};

export default BasicDropdown;
