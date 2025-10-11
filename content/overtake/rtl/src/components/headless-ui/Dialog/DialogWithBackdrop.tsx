import CardBox from "src/components/shared/CardBox";
import Withbackdrop from "./Code/WithBackdropCode";
import WithBackdropCode from "./Code/WithBackdropCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const DialogWithBackdrop = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Dialog With Backdrop</h4>
          <Withbackdrop/>
        </div>
        <CodeDialog>{WithBackdropCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DialogWithBackdrop;
