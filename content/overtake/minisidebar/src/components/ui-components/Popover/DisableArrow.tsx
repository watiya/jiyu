import CardBox from 'src/components/shared/CardBox';
import Disablearrow from './Code/DisableArrowCode';
import DisablearrowCode from './Code/DisableArrowCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DisableArrow = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Disable arrow</h4>
            <Disablearrow />
          </div>
          <CodeDialog>{DisablearrowCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisableArrow;
