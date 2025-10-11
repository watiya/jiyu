import CardBox from "src/components/shared/CardBox";
import Buttonaction from "./Codes/ButtonActionCode";
import ButtonActionCode from "./Codes/ButtonActionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const ButtonDropdown = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Button Action</h4>
          <Buttonaction />
        </div>
        <CodeDialog>{ButtonActionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ButtonDropdown;
