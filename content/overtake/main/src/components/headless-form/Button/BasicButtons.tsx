import CodeDialog from "src/components/ui-components/CodeDialog";
import Basicbuttons from "./Codes/BasicButtonsCode";
import BasicButtonsCode from "./Codes/BasicButtonsCode.tsx?raw";
import CardBox from "src/components/shared/CardBox";
const BasicButtons = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Buttons</h4>
          <Basicbuttons/>
        </div>
        <CodeDialog>{BasicButtonsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicButtons;
