import CardBox from 'src/components/shared/CardBox';
import Labelprogress from './Code/LabelProgressCode';
import LabelprogressCode from './Code/LabelProgressCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LabelProgress = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Label Progress Bar</h4>
            <Labelprogress />
          </div>
          <CodeDialog>{LabelprogressCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LabelProgress;
