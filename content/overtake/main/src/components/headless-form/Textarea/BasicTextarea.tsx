import CardBox from "src/components/shared/CardBox";
import Basictextarea from "./code/BasicTextareacode"
import BasicTextareacode from "./code/BasicTextareacode.tsx?raw"
import CodeDialog from "src/components/ui-components/CodeDialog";


const BasicTextarea = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Basic Textarea</h4>
          <Basictextarea/>
        </div>
        <CodeDialog>{BasicTextareacode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicTextarea;
