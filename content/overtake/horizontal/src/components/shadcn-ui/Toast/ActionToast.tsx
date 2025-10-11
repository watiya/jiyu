import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Actiontoast from "./code/ActionToastCode";
import ActionToastCode from "./code/ActionToastCode.tsx?raw";

const ActionToast = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Toast With Action</h4>
          <Actiontoast/>
        </div>
        <CodeDialog>{ActionToastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ActionToast;
