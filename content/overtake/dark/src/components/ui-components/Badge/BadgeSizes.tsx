import CardBox from 'src/components/shared/CardBox';
import Sizes from './Code/SizesCode';
import SizesCode from './Code/SizesCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const BadgeSizes = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Badge Sizes</h4>
            <Sizes />
          </div>
          <CodeDialog>{SizesCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default BadgeSizes;
