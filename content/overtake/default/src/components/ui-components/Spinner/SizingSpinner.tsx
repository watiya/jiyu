import CardBox from 'src/components/shared/CardBox';
import Sizingspinner from './Code/SizingSpinnerCode';
import SizingspinnerCode from './Code/SizingSpinnerCode.tsx?raw';
import CodeDialog from '../CodeDialog';
const SizingSpinner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sizing Options</h4>
            <Sizingspinner />
          </div>
          <CodeDialog>{SizingspinnerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SizingSpinner;
