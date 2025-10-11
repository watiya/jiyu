import CardBox from "src/components/shared/CardBox";
import Sepratingitems from "./Codes/SepratingItemsCode";
import SepratingItemsCode from "./Codes/SepratingItemsCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const SepratorDropdown = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Separating Items</h4>
          <Sepratingitems />
        </div>
        <CodeDialog>{SepratingItemsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SepratorDropdown;
