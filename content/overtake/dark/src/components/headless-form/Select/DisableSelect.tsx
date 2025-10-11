
import CardBox from "src/components/shared/CardBox";
import Disabledselect from "./Code/DisabledSelectCode"
import DisabledSelectCode from "./Code/DisabledSelectCode.tsx?raw"
import CodeDialog from "src/components/ui-components/CodeDialog";

const DisabledSelect = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 mb-4 ">
          <h4 className="text-lg font-semibold">Disabeld Select</h4>
        <Disabledselect/>
        </div>
        <CodeDialog>{DisabledSelectCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisabledSelect;
