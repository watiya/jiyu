import CodeDialog from "src/components/ui-components/CodeDialog";
import CardBox from "../../shared/CardBox";
import Dafaulttextarea from "./code/DafaultTextareacode";
import DafaultTextareacode from "./code/DafaultTextareacode.tsx?raw";

const DefaultTextarea = () => {
  return (
    <CardBox className="p-0">
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Default Textarea</h4>
        <Dafaulttextarea/>
      </div>
      <CodeDialog>{DafaultTextareacode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default DefaultTextarea;
