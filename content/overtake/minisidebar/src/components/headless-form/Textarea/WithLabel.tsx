import CodeDialog from "src/components/ui-components/CodeDialog";
import WithLabeltextarea from "./code/WithLabelTextareacode"
import WithLabelTextareacode from "./code/WithLabelTextareacode.tsx?raw"
import CardBox from "src/components/shared/CardBox";
const WithLabelTextarea = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Label With Textarea</h4>
        <WithLabeltextarea/>
        </div>
        <CodeDialog>{WithLabelTextareacode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithLabelTextarea;
