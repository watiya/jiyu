import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Checkboxlabel from "./code/CheckboxLabelCode";
import CheckboxLabelCode from "./code/CheckboxLabelCode.tsx?raw";

const CheckboxWithLable = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">With Label</h4>
        <Checkboxlabel/>
      </div>
      <CodeDialog>{CheckboxLabelCode}</CodeDialog>
      </div>
      
    </CardBox>
  );
};

export default CheckboxWithLable;
