import CardBox from "src/components/shared/CardBox";
import Coordination from "./Codes/CoordinationCode";
import CoordinationCode from "./Codes/CoordinationCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const CoordinationTransition = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Coordinating Transition</h4>
          <Coordination />
        </div>
        <CodeDialog>{CoordinationCode}</CodeDialog>
        </div>

      </CardBox>
    </div>
  );
};

export default CoordinationTransition;
