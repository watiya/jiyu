import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Titletoast from "./code/TitleToastCode";
import TitleToastCode from "./code/TitleToastCode.tsx?raw";

const TitleToast = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-4">Toast With Title</h4>
        <Titletoast/>
      </div>
      <CodeDialog>{TitleToastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TitleToast;
