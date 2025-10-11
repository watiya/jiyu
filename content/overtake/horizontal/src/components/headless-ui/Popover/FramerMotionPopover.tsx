import CardBox from "src/components/shared/CardBox";
import Framerpopover from "./Code/FramerPopoverCode";
import FramerPopoverCode from "./Code/FramerPopoverCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const FramerMotionPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Framer Motion Popover</h4>
          <Framerpopover />
        </div>
        <CodeDialog>{FramerPopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FramerMotionPopover;
