

import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Dropdowncombo from "./code/DropdownComboCode";
import DropdownComboCode from "./code/DropdownComboCode.tsx?raw";



const DropdownCombobox = () => {
  

  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Dropdown Combobox</h4>
        <Dropdowncombo/>
      </div>
      <CodeDialog>{DropdownComboCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default DropdownCombobox;
