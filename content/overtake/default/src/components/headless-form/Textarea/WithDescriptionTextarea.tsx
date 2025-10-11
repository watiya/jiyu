
import CodeDialog from "src/components/ui-components/CodeDialog";
import WithDescriptiontextarea from "./code/WithDescriptionTextareacode"
import WithDescriptionTextareacode from "./code/WithDescriptionTextareacode.tsx?raw"
import CardBox from "src/components/shared/CardBox";
const WithDescriptionTextarea = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Discription With Textarea</h4>
          <WithDescriptiontextarea/>
        </div>
        <CodeDialog>{WithDescriptionTextareacode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithDescriptionTextarea;
