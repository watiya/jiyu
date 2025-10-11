import CardBox from "src/components/shared/CardBox";
import Linkdropdown from "./Codes/LinkDropdownCode";
import LinkDropdownCode from "./Codes/LinkDropdownCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const LinkDropdown = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Links Dropdown</h4>
          <Linkdropdown />
        </div>
        <CodeDialog>{LinkDropdownCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LinkDropdown;
