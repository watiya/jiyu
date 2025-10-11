import CardBox from "src/components/shared/CardBox";
import Verticaltabs from "./Code/VerticalTabsCode";
import VerticalTabsCode from "./Code/VerticalTabsCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const VerticalTabs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Vertical Tabs</h4>
          <Verticaltabs />
        </div>
        <CodeDialog>{VerticalTabsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default VerticalTabs;
