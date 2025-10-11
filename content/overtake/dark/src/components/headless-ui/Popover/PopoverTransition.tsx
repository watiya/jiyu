import CardBox from "src/components/shared/CardBox";
import Popovertransition from "./Code/PopoverTransitionCode";
import PopoverTransitionCode from "./Code/PopoverTransitionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const PopoverTransition = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Popover Transitions</h4>
          <Popovertransition />
        </div>
        <CodeDialog>{PopoverTransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PopoverTransition;
