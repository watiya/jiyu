import CardBox from 'src/components/shared/CardBox';
import Customcontrol from './Code/CustomControlCode';
import CustomcontrolCode from './Code/CustomControlCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CustomControl = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Custom controls</h4>
            <Customcontrol />
          </div>
          <CodeDialog>{CustomcontrolCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CustomControl;
