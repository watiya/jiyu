import CardBox from "src/components/shared/CardBox";
import Basictransaction from "./Codes/BasicTransactionCode";
import BasicTransactionCode from "./Codes/BasicTransactionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const BasicTransition = () => {
    
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Transition</h4>
          <Basictransaction/>
        </div>
        <CodeDialog>{BasicTransactionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicTransition;
