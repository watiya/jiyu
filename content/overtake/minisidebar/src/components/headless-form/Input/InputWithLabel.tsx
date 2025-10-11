import CardBox from "src/components/shared/CardBox";
import InputwithLbl from "./Codes/InputWithLblCode";
import InputWithLblCode from "./Codes/InputWithLblCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const InputWithLabel = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 ">
          <h4 className="text-lg font-semibold">Input With Label</h4>
          <InputwithLbl />
        </div>
        <CodeDialog>{InputWithLblCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default InputWithLabel;
