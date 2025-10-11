import CardBox from "src/components/shared/CardBox";
import Disablebuttons from "./Codes/DisableButtonsCode";
import DisableButtonsCode from "./Codes/DisableButtonsCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const DisableButton = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Disable Buttons</h4>
          <Disablebuttons />
        </div>
        <CodeDialog>{DisableButtonsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableButton;
