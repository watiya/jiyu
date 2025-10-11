import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Basiccommand from "./code/BasicCommandCode";
import BasicCommandCode from "./code/BasicCommandCode.tsx?raw";

const BasicCommand = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Command</h4>
          <Basiccommand/>
        </div>
        <CodeDialog>{BasicCommandCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicCommand;
