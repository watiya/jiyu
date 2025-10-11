import CardBox from "src/components/shared/CardBox";
import Popoverwidth from "./Code/PopoverWidthCode";
import PopoverWidthCode from "./Code/PopoverWidthCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const PopoverWidth = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Popover Width</h4>
          <Popoverwidth/>
        </div>
        <CodeDialog>{PopoverWidthCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PopoverWidth;
