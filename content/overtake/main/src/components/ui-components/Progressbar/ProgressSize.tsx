import CardBox from 'src/components/shared/CardBox';
import Progresssize from './Code/ProgressSizeCode';
import ProgresssizeCode from './Code/ProgressSizeCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ProgressSize = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Progress Bar Sizing</h4>
            <Progresssize />
          </div>
          <CodeDialog>{ProgresssizeCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ProgressSize;
