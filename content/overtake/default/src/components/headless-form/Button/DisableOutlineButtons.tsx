import CardBox from "src/components/shared/CardBox";
import DisableoutlineBtn from "./Codes/DisableOutlineBtnCode";
import DisableOutlineBtn from "./Codes/DisableOutlineBtnCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const DisableOutlineButtons = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Disable Outlined Buttons</h4>
          <DisableoutlineBtn />
        </div>
        <CodeDialog>{DisableOutlineBtn}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableOutlineButtons;
