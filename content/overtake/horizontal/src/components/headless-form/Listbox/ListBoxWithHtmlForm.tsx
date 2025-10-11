

import CardBox from "src/components/shared/CardBox";
import ListBoxwithHtml from "./Codes/ListBoxWithHtmlCode";
import ListBoxWithHtmlCode from "./Codes/ListBoxWithHtmlCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const ListBoxWithHtmlForm = () => {
  
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Using HTML forms</h4>
          <ListBoxwithHtml/>
        </div>
        <CodeDialog>{ListBoxWithHtmlCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ListBoxWithHtmlForm;
