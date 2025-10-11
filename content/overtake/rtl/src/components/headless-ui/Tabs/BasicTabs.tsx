import CardBox from "src/components/shared/CardBox";
import Basictabs from "./Code/BasicTabsCode";
import BasicTabsCode from "./Code/BasicTabsCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const BasicTabs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Tabs</h4>
          <Basictabs />
        </div>
        <CodeDialog>{BasicTabsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicTabs;
