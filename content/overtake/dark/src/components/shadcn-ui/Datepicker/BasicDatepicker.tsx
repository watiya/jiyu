import CodeDialog from 'src/components/ui-components/CodeDialog';
import CardBox from '../../shared/CardBox';
import Basicdatepicker from './code/BasicDatepickerCode';
import BasicDatepickerCode from './code/BasicDatepickerCode.tsx?raw';

const BasicDatepicker = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Basic Datepicker</h4>
          <Basicdatepicker />
        </div>
        <CodeDialog>{BasicDatepickerCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default BasicDatepicker;
