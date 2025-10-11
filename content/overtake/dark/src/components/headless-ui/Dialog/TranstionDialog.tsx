import CardBox from "src/components/shared/CardBox";
import Transitiondialog from "./Code/TransitionDialogCode";
import TransitionDialogCode from "./Code/TransitionDialogCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const TranstionDialog = () => {
 
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Transitions Dialog</h4>
          <Transitiondialog />
        </div>
        <CodeDialog>{TransitionDialogCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TranstionDialog;
