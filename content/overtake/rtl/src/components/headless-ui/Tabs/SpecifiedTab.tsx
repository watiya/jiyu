import CardBox from "src/components/shared/CardBox";
import Specifieddefault from "./Code/SpecifiedDefaultCode";
import SpecifiedDefaultCode from "./Code/SpecifiedDefaultCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const SpecifiedTab = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Specifying The Default Tab</h4>
          <Specifieddefault/>
        </div>
        <CodeDialog>{SpecifiedDefaultCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SpecifiedTab;
