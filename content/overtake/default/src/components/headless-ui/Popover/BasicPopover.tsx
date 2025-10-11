import CardBox from "src/components/shared/CardBox";
import Basicpopover from "./Code/BasicPopoverCode";
import BasicPopoverCode from "./Code/BasicPopoverCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const BasicPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Basic Popover</h4>
          <Basicpopover />
        </div>
        <CodeDialog>{BasicPopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicPopover;
