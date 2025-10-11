import CardBox from "src/components/shared/CardBox";
import Groupitem from "./Codes/GroupItemCode";
import GroupItemCode from "./Codes/GroupItemCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const GroupingItems = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Grouping Items</h4>
          <Groupitem />
        </div>
        <CodeDialog>{GroupItemCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default GroupingItems;
