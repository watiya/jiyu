import CodeDialog from "src/components/ui-components/CodeDialog";
import Basicdialod from "./Code/BasicDialodCode";
import BasicDialodCode from "./Code/BasicDialodCode.tsx?raw";
import CardBox from "src/components/shared/CardBox";

const BasicDialog = () => {
 
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Dialog</h4>
          <Basicdialod />
        </div>
        <CodeDialog>{BasicDialodCode}</CodeDialog>
        </div>

        
      </CardBox>
    </div>
  );
};

export default BasicDialog;
