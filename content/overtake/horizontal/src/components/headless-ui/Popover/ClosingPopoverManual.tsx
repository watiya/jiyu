import CardBox from "src/components/shared/CardBox";
import Closingmanually from "./Code/ClosingManuallyCode";
import ClosingManuallyCode from "./Code/ClosingManuallyCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const ClosingPopoverManual = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Closing Popovers Manually</h4>
          <Closingmanually />
        </div>
        <CodeDialog>{ClosingManuallyCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ClosingPopoverManual;
