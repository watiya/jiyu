import CardBox from "src/components/shared/CardBox";
import Clicktransition from "./Codes/ClickTransitionCode";
import ClickTransitionCode from "./Codes/ClickTransitionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const ClickTransition = () => {
 
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Click To Transition</h4>
          <Clicktransition/>
        </div>
        <CodeDialog>{ClickTransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};
export default ClickTransition;
