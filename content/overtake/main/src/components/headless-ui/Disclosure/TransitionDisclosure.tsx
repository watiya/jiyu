import CardBox from "src/components/shared/CardBox";
import Transition from "./Code/TransitionCode";
import TransitionCode from "./Code/TransitionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const TransitionDisclosure = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Transitions Disclosure</h4>
          <Transition />
        </div>
        <CodeDialog>{TransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TransitionDisclosure;
