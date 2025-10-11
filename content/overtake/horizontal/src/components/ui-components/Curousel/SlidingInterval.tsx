import CardBox from 'src/components/shared/CardBox';
import SlidingCurosel from './Code/SlidingCuroselCode';
import SlidingCuroselCode from './Code/SlidingCuroselCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const SlidingInterval = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sliding Interval</h4>
            <SlidingCurosel />
          </div>
          <CodeDialog>{SlidingCuroselCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SlidingInterval;
