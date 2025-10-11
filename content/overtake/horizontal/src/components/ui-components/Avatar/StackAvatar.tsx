import CardBox from 'src/components/shared/CardBox';
import StackLayout from './Code/StackLayoutCode';
import StackLayoutCode from './Code/StackLayoutCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const StackAvatar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Stacked layout</h4>
            <StackLayout />
          </div>
          <CodeDialog>{StackLayoutCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default StackAvatar;
