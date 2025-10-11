import CardBox from "src/components/shared/CardBox";
import Withdescription from "./Codes/WithDescriptionCode";
import WithDescriptionCode from "./Codes/WithDescriptionCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const WithDescription = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">With Discription</h4>
          <Withdescription/>
        </div>
        <div>
          <CodeDialog>{WithDescriptionCode}</CodeDialog>
          </div>
        </div>
      </CardBox>
    </div>
  );
};

export default WithDescription;
