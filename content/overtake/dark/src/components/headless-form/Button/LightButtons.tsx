import CardBox from "src/components/shared/CardBox";
import Lightbuttons from "./Codes/LightButtonsCode";
import LightButtonsCode from "./Codes/LightButtonsCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const LightButtons = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Light Buttons</h4>
          <Lightbuttons/>
        </div>
        <CodeDialog>{LightButtonsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LightButtons;
