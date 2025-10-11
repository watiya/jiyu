import CardBox from 'src/components/shared/CardBox';
import Defaultprogress from './Code/DefaultProgressCode';
import DefaultprogressCode from './Code/DefaultProgressCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultProgress = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Progress Bar</h4>
            <Defaultprogress />
          </div>
          <CodeDialog>{DefaultprogressCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultProgress;
