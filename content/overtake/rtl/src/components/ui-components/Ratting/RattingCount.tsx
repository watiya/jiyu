import CardBox from 'src/components/shared/CardBox';
import Rattingcount from './Code/RatingCountCode';
import RattingcountCode from './Code/RatingCountCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const RattingCount = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rating Count</h4>
            <Rattingcount />
          </div>
          <CodeDialog>{RattingcountCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RattingCount;
