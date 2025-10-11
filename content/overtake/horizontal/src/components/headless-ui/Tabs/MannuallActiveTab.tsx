import CardBox from "src/components/shared/CardBox";
import ManuallActivetab from "./Code/ManuallActiveTabCode";
import ManuallActiveTabCodes from "./Code/ManuallActiveTabCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const MannuallActiveTab = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Manually Active Tab</h4>
          <ManuallActivetab />
        </div>
        <CodeDialog>{ManuallActiveTabCodes}</CodeDialog>
       </div>
      </CardBox>
    </div>
  );
};

export default MannuallActiveTab;
