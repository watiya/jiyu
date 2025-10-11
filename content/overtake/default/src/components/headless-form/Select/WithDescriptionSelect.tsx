
import CardBox from "src/components/shared/CardBox";
import WithDescriptionselect from "./Code/WithDescriptionSelectCode"
import WithDescriptionSelectCode from "./Code/WithDescriptionSelectCode.tsx?raw"
import CodeDialog from "src/components/ui-components/CodeDialog";

const WithDescriptionSelect = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 mb-4 ">
          <h4 className="text-lg font-semibold">With Descrioption Select</h4>
        <WithDescriptionselect/>
        </div>
        <CodeDialog>{WithDescriptionSelectCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithDescriptionSelect;
