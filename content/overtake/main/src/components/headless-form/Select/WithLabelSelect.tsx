import CodeDialog from "src/components/ui-components/CodeDialog";
import WithLabelselect from "./Code/WithLabelSelectCode"
import WithLabelSelectCode from "./Code/WithLabelSelectCode.tsx?raw"
import CardBox from "src/components/shared/CardBox";



const WithLabelSelect = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 mb-4">
          <h4 className="text-lg font-semibold">With Label Select</h4>
        <WithLabelselect/>
        </div>
        <CodeDialog>{WithLabelSelectCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithLabelSelect;
