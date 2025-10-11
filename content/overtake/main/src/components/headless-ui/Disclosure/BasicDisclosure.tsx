import CardBox from "src/components/shared/CardBox";
import Basicdisclosure from "./Code/BasicDisclosureCode";
import BasicDisclosureCode from "./Code/BasicDisclosureCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";

const BasicDisclosure = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Basic Disclosure</h4>
          <Basicdisclosure />
        </div>
        <CodeDialog>{BasicDisclosureCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BasicDisclosure;
