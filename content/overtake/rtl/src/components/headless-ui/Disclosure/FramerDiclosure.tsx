import CodeDialog from "src/components/ui-components/CodeDialog";
import Framermotion from "./Code/FramerMotionCode";
import FramerMotionCode from "./Code/FramerMotionCode.tsx?raw";
import CardBox from "src/components/shared/CardBox";
const FramerDiclosure = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">
            Disclosure With Framer Motion
          </h4>
          <Framermotion />
        </div>
        <CodeDialog>{FramerMotionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FramerDiclosure;
