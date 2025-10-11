import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Basiccollapse from "./code/BasicCollapseCode";
import BasicCollapseCode from "./code/BasicCollapseCode.tsx?raw";

const BasicCollapse = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Basic Collapse</h4>
        <Basiccollapse />
      </div>
      <CodeDialog>{BasicCollapseCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default BasicCollapse;
