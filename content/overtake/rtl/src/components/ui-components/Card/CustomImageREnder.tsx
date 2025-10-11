import CardBox from 'src/components/shared/CardBox';
import CustomImageRender from './Code/CustomImageREnderCode';
import CustomImageRenderCode from './Code/CustomImageREnderCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CustomImageREnder = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Image Render Function</h4>
            <CustomImageRender />
          </div>
          <CodeDialog>{CustomImageRenderCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CustomImageREnder;
