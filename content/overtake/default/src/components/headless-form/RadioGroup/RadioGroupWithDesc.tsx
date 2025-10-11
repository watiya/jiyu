import CardBox from "src/components/shared/CardBox";
import RadioGroupwithDesc from "./Codes/RadioGroupWithDescCode";
import RadioGroupWithDescCode from "./Codes/RadioGroupWithDescCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const RadioGroupWithDesc = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">
            With Description
          </h4>
          <RadioGroupwithDesc/>
        </div>
        <CodeDialog>{RadioGroupWithDescCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RadioGroupWithDesc;
