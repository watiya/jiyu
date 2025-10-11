import CardBox from "src/components/shared/CardBox";
import Disableitem from "./Codes/DisableItemCode";
import DisableItemCode from "./Codes/DisableItemCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const DisablingItem = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Disable Items</h4>
          <Disableitem />
        </div>
        <CodeDialog>{DisableItemCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisablingItem;
