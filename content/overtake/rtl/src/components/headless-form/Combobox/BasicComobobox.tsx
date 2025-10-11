import CardBox from "src/components/shared/CardBox";
import Basiccombo from "./Codes/BasicComboCode";
import BasicComboCode from "./Codes/BasicComboCode.tsx?raw";

import CodeDialog from "src/components/ui-components/CodeDialog";



const BasicCombobox = () => {
  

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">Basic</h4>
          <Basiccombo />
        </div>
        <CodeDialog>{BasicComboCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicCombobox;
