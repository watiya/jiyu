import CardBox from 'src/components/shared/CardBox';
import Limitdatep from './Code/LimitDatepCode';
import LimitdatepCode from './Code/LimitDatepCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LimitDatep = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Limit The Date</h4>
            <Limitdatep />
          </div>
          <CodeDialog>{LimitdatepCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LimitDatep;
