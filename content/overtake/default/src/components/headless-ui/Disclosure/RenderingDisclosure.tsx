import CardBox from "src/components/shared/CardBox";
import Renderdiclosure from "./Code/RenderDiclosureCode";
import RenderDiclosureCode from "./Code/RenderDiclosureCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const RenderingDisclosure = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">
            Rendering As Different Elements
          </h4>
          <Renderdiclosure />
        </div>
        <CodeDialog>{RenderDiclosureCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RenderingDisclosure;
