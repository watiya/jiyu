import CardBox from "src/components/shared/CardBox";
import RoundedoutlinedBtn from "./Codes/RoundedOutlinedBtnCode";
import RoundedOutlinedBtnCode from "./Codes/RoundedOutlinedBtnCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const RoundedOutlineBtn = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Rounded Outlined Buttons</h4>
          <RoundedoutlinedBtn/>
        </div>
        <CodeDialog>{RoundedOutlinedBtnCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RoundedOutlineBtn;
