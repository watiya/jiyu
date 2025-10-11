import CardBox from "src/components/shared/CardBox";
import Scrollabledialog from "./Code/ScrollableDialogCode";
import ScrollableDialogCode from "./Code/ScrollableDialogCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const ScrollableDialog = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Scrollable Dialog</h4>
           <Scrollabledialog/>
        </div>
        <CodeDialog>{ScrollableDialogCode}</CodeDialog>
       </div>
      </CardBox>
    </div>
  );
};

export default ScrollableDialog;
