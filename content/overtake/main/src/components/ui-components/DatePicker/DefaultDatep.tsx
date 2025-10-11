import CardBox from 'src/components/shared/CardBox';
import Defaultdatep from './Code/DefaultDatepCode';
import DefaultdatepCode from './Code/DefaultDatepCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultDatep = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Datepicker</h4>
            <Defaultdatep />
          </div>
          <CodeDialog>{DefaultdatepCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultDatep;
