import CardBox from "src/components/shared/CardBox";
import CombowithLable from "./Codes/ComboWithLableCode";
import ComboWithLableCode from "./Codes/ComboWithLableCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const WithLabel = () => {
 

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">With Label</h4>
          <CombowithLable/>
        </div>
        <CodeDialog>{ComboWithLableCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithLabel;
