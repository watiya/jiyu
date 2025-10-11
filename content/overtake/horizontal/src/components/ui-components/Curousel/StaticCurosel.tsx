import CardBox from 'src/components/shared/CardBox';
import Staticcurosel from './Code/StaticCuroselCode';
import StaticcuroselCode from './Code/StaticCuroselCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const StaticCurosel = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Static Carousel</h4>
            <Staticcurosel />
          </div>
          <CodeDialog>{StaticcuroselCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default StaticCurosel;
