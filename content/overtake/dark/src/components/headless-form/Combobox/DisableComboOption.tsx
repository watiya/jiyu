import CardBox from "src/components/shared/CardBox";
import DisablecomboOpt from "./Codes/DisableComboOptCode";
import DisableComboOptCode from "./Codes/DisableComboOptCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const DisableComboOption = () => {
  

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Disabled Combo Option</h4>
          <DisablecomboOpt/>
        </div>
        <CodeDialog>{DisableComboOptCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableComboOption;
