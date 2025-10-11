import CardBox from "src/components/shared/CardBox";
import Popoverposition from "./Code/PopoverPositionCode";
import PopoverPositionCode from "./Code/PopoverPositionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const PopoverPositioning = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Popover Positioning</h4>
          <Popoverposition />
        </div>
        <CodeDialog>{PopoverPositionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PopoverPositioning;
