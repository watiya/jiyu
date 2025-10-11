import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Destrictivetoast from "./code/DesctructiveToastCode";
import DestrictiveToastCode from "./code/DesctructiveToastCode.tsx?raw";

const DestructiveToast = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Destructive Toast</h4>
          <Destrictivetoast />
        </div>
        <CodeDialog>{DestrictiveToastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DestructiveToast;
