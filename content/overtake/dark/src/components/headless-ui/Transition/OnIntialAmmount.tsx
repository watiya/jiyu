import CardBox from "src/components/shared/CardBox";
import Intialtransition from "./Codes/IntialTransitionCode";
import IntialTransitionCode from "./Codes/IntialTransitionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const OnIntialAmmount = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">
            Transitioning On Initial Mount
          </h4>
          <Intialtransition/>
        </div>
        <CodeDialog>{IntialTransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default OnIntialAmmount;
