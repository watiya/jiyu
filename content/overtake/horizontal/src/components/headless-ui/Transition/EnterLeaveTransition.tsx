import CardBox from "src/components/shared/CardBox";
import EnterLeavetransition from "./Codes/EnterLeaveTransitionCode";
import EnterLeaveTransitionCode from "./Codes/EnterLeaveTransitionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const EnterLeaveTransition = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Different Transition</h4>
          <EnterLeavetransition/>
        </div>
        <CodeDialog>{EnterLeaveTransitionCode}</CodeDialog>
       </div>
      </CardBox>
    </div>
  );
};

export default EnterLeaveTransition;
