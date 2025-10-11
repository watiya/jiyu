import CardBox from "src/components/shared/CardBox";
import FramerMotiondialog from "./Code/FramerMotionDialogCode";
import FramerMotionDialogCode from "./Code/FramerMotionDialogCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const FramerAnimationDialog = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Framer Motion Dialog</h4>
          <FramerMotiondialog />
        </div>
        <CodeDialog>{FramerMotionDialogCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FramerAnimationDialog;
