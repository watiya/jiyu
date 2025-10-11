import CardBox from 'src/components/shared/CardBox';
import BasicAccordion from './Code/BasicAccordiancode';
import BasicAccordionCode from './Code/BasicAccordiancode.tsx?raw';
import CodeDialog from '../CodeDialog';

const basicAccordion = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Basic Accordion</h4>
            <BasicAccordion />
          </div>
          <CodeDialog>{BasicAccordionCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default basicAccordion;
