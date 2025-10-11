import CardBox from "src/components/shared/CardBox";
import Disabletab from "./Code/DisableTabCode";
import DisableTabCode from "./Code/DisableTabCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const DisableTab = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Disable Tab</h4>
          <Disabletab/>
        </div>
        <CodeDialog>{DisableTabCode}</CodeDialog>
       </div>
      </CardBox>
    </div>
  );
};

export default DisableTab;
