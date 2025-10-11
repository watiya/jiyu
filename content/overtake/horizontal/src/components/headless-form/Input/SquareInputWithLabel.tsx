import CardBox from "src/components/shared/CardBox";
import Squareinputs from "./Codes/SquareInputCode";
import SquareInputsCodes from "./Codes/SquareInputCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const SquareInputWithLabel = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Square Input With Label</h4>
          <Squareinputs />
        </div>
        <CodeDialog>{SquareInputsCodes}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SquareInputWithLabel;
