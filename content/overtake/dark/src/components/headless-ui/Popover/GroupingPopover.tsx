import CardBox from "src/components/shared/CardBox";
import Groupingpopover from "./Code/GroupingPopoverCode";
import GroupingPopoverCode from "./Code/GroupingPopoverCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const GroupingPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Grouping Related Popover</h4>
          <Groupingpopover/>
        </div>
        <CodeDialog>{GroupingPopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default GroupingPopover;
