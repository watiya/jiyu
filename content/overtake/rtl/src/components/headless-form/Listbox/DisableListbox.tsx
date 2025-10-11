import CardBox from "src/components/shared/CardBox";
import Disablelistbox from "./Codes/DisableListboxCode";
import DisableListboxCode from "./Codes/DisableListboxCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const DisableListBox = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Disable Listbox Option</h4>
          <Disablelistbox />
        </div>
        <CodeDialog>{DisableListboxCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableListBox;
