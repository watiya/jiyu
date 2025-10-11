import CardBox from "src/components/shared/CardBox";
import WithHtmlradioForm from "./Codes/WithHtmlRadioFormCode";
import WithHtmlRadioFormCode from "./Codes/WithHtmlRadioFormCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const WithHtmlForms = () => {
  

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">With HTML forms</h4>
          <WithHtmlradioForm/>
        </div>
        <CodeDialog>{WithHtmlRadioFormCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithHtmlForms;
