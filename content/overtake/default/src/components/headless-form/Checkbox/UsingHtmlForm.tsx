import CardBox from "src/components/shared/CardBox";
import UsinghtmlForm from "./Codes/UsingHtmlFormCode";
import UsingHtmlFormCode from "./Codes/UsingHtmlFormCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const UsingHtmlForm = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">With HTML Forms</h4>
          <UsinghtmlForm/>
        </div>
        <CodeDialog>{UsingHtmlFormCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default UsingHtmlForm;
