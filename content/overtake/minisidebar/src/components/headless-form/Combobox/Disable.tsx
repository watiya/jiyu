import CardBox from "src/components/shared/CardBox";
import Disabled from "./Codes/DisabledCode";
import DisabledCode from "./Codes/DisabledCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const DisableCombo = () => {
  

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Disabled</h4>
          <Disabled />
        </div>
        <CodeDialog>{DisabledCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableCombo;
