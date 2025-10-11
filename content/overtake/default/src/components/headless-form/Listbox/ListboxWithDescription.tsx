import CardBox from "src/components/shared/CardBox";
import Listdesc from "./Codes/ListDescCode";
import ListDescCode from "./Codes/ListDescCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const ListboxWithDescription = () => {
 
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Listbox With Description</h4>
          <Listdesc />
        </div>
        <CodeDialog>{ListDescCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ListboxWithDescription;
