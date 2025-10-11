

import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Simpleinput from "./code/SimpleInputCode";
import SimpleInputcode from "./code/SimpleInputCode.tsx?raw";
const SimpleInput = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">General Input</h4>
        <Simpleinput/>
      </div>
      <CodeDialog>{SimpleInputcode}</CodeDialog>
     </div>
    </CardBox>
  );
};

export default SimpleInput;
