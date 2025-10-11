import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import InputWithbutton from "./code/InputWithButtonCode";
import InputWithButtonCode from "./code/InputWithButtonCode.tsx?raw";

const Forminput = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Input With Button</h4>
        <InputWithbutton/>
      </div>
      <CodeDialog>{InputWithButtonCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default Forminput;
