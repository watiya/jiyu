import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Inputlabel from "./code/InputLabelCode";
import InputLabelCode from "./code/InputLabelCode.tsx?raw";
const InputWithLabel = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Input With Label</h4>
        <Inputlabel />
      </div>
      <CodeDialog>{InputLabelCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default InputWithLabel;
