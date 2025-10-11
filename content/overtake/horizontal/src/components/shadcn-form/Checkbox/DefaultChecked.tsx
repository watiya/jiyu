import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import DefaulTCheck from "./code/DefaultCheckCode";
import DefaultCheckCode from "./code/DefaultCheckCode.tsx?raw";

const DefaultChecked = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Default Checked</h4>
        <DefaulTCheck/>
      </div>
      <CodeDialog>{DefaultCheckCode}</CodeDialog>
      </div>
      
    </CardBox>
  );
};

export default DefaultChecked;
