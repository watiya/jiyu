import CardBox from 'src/components/shared/CardBox';
import Advancerating from './Code/AdvanceRatingCode';
import AdvanceratingCode from './Code/AdvanceRatingCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const AdvanceRatting = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Advanced Rating</h4>
            <Advancerating />
          </div>
          <CodeDialog>{AdvanceratingCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AdvanceRatting;
