import CardBox from "src/components/shared/CardBox";
import InputWithdescription from "./Codes/InputWithDescriptionCode";
import InputWithDescriptionCode from "./Codes/InputWithDescriptionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const InputWithDescription = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Input With Description</h4>
          <InputWithdescription/>
        </div>
        <CodeDialog>{InputWithDescriptionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default InputWithDescription;
