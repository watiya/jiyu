import CardBox from "src/components/shared/CardBox";
import Transitioncheck from "./Codes/TransitionCheckCode";
import TransitionCheckCode from "./Codes/TransitionCheckCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const TransitionCheckbox = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Transitions Checkbox</h4>
          <Transitioncheck/>
        </div>
        <CodeDialog>{TransitionCheckCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TransitionCheckbox;
