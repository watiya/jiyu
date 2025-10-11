import CardBox from "src/components/shared/CardBox";
import LabelwithList from "./Codes/LabelWithListcode";
import LabelWithListcode from "./Codes/LabelWithListcode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const LabelListbox = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Label With Listbox</h4>
          <LabelwithList />
        </div>
        <CodeDialog>{LabelWithListcode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LabelListbox;
