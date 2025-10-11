import CardBox from "src/components/shared/CardBox";
import Usinguncontrolled from "./Codes/UsingUncontrolledCode";
import UsingUncontrolledCode from "./Codes/UsingUncontrolledCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const UsingUncontrolled = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Using as Uncontrolled </h4>
          <Usinguncontrolled />
        </div>
        <CodeDialog>{UsingUncontrolledCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default UsingUncontrolled;
