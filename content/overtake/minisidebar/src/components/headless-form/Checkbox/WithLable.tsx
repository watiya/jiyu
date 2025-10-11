
import CardBox from "src/components/shared/CardBox";
import Withlabel from "./Codes/WithLabelCode";
import WithLabelCode from "./Codes/WithLabelCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const WithLable = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Checkbox Label</h4>
          <Withlabel/>
        </div>
        <CodeDialog>{WithLabelCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithLable;
