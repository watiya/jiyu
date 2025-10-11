import CardBox from "src/components/shared/CardBox";
import Closingdisclosure from "./Code/ClosingDisclosureCode";
import ClosingDisclosureCode from "./Code/ClosingDisclosureCode.tsx?raw";
import CodeDialog from "src/components/ui-components/CodeDialog";
const DisclosureManually = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">
            Closing Disclosures Manually
          </h4>
          <Closingdisclosure />
        </div>
        <CodeDialog>{ClosingDisclosureCode}</CodeDialog>
        </div>
        
      </CardBox>
    </div>
  );
};

export default DisclosureManually;
