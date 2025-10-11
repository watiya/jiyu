import CardBox from 'src/components/shared/CardBox';
import Imageoverride from './Code/ImageOverrideCode';
import ImageoverrideCode from './Code/ImageOverrideCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ImageOverride = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Override Image</h4>
            <Imageoverride />
          </div>
          <CodeDialog>{ImageoverrideCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ImageOverride;
