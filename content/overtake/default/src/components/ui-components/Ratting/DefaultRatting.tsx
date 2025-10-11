import CardBox from 'src/components/shared/CardBox';
import Defaultrating from './Code/DefaultRatingCode';
import DefaultratingCode from './Code/DefaultRatingCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultRatting = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default rating</h4>
            <Defaultrating />
          </div>
          <CodeDialog>{DefaultratingCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultRatting;
