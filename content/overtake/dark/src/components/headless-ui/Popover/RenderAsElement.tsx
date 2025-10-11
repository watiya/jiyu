import CardBox from "src/components/shared/CardBox";
import Renderpopover from "./Code/RenderPopoverCode";
import RenderPopoverCode from "./Code/RenderPopoverCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const RenderAsElement = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">
            Rendering Different Elements
          </h4>
          <Renderpopover />
        </div>
        <CodeDialog>{RenderPopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderAsElement;
