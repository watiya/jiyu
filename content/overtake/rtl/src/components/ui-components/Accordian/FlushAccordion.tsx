

import CardBox from "src/components/shared/CardBox";
import FlushAccordionComp from "./Code/FlushAccordiancode";
import FlushAccordionCode from "./Code/FlushAccordiancode.tsx?raw";
import CodeDialog from "../CodeDialog";

const FlushAccordion = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold mb-4">Flush Accordion</h4>
            </div>
            <FlushAccordionComp />
          </div>
          <CodeDialog>
            {FlushAccordionCode}
          </CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default FlushAccordion;
