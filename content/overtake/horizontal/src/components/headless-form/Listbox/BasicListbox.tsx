import CardBox from "src/components/shared/CardBox";
import Basiclist from "./Codes/BasicListCode";
import BasicListCode from "./Codes/BasicListCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const BasicListbox = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Listbox</h4>
          <Basiclist/>
        </div>
        <CodeDialog>{BasicListCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicListbox;
