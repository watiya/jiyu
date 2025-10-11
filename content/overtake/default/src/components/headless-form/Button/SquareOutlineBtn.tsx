import CardBox from "src/components/shared/CardBox";
import SquareoutlineBtn from "./Codes/SquareOutlineBtnCode";
import SquareOutlineBtnCode from "./Codes/SquareOutlineBtnCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";


const SquareOutlineBtn = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Square Outlined Buttons</h4>
          <SquareoutlineBtn/>
        </div>
        <CodeDialog>{SquareOutlineBtnCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SquareOutlineBtn;
