import CardBox from "src/components/shared/CardBox";
import MainradioGroup from "./Codes/MainRadioGroupCode";
import MainRadioGroupCode from "./Codes/MainRadioGroupCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const MainRadioGroup = () => {
 
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Simple Radio Group </h4>
          <MainradioGroup />
        </div>
        <CodeDialog>{MainRadioGroupCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default MainRadioGroup;
