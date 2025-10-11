import CardBox from 'src/components/shared/CardBox';
import Progresscolor from './Code/ProgressColorCode';
import ProgresscolorCode from './Code/ProgressColorCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ProgressColor = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Progress Bar Color</h4>
            <Progresscolor />
          </div>
          <CodeDialog>{ProgresscolorCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ProgressColor;
