import CardBox from "src/components/shared/CardBox";
import Htmlforms from "./Codes/HtmlFormsCodes";
import HtmlFormsCodes from "./Codes/HtmlFormsCodes.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";



const AllowCustomVal = () => {
  

  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6 max-w-sm">
          <h4 className="text-lg font-semibold">HTML Forms</h4>
          <Htmlforms />
        </div>
        <CodeDialog>{HtmlFormsCodes}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AllowCustomVal;
