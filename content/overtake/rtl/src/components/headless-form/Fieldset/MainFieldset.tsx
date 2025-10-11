import CardBox from "src/components/shared/CardBox";
import Fieldset from "./Codes/FieldsetCode";
import FieldsetCode from "./Codes/FieldsetCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const MainFieldset = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Fieldset Form</h4>
          <Fieldset />
        </div>
        <CodeDialog>{FieldsetCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default MainFieldset;
