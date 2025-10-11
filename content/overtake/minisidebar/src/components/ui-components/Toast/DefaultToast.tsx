import CardBox from 'src/components/shared/CardBox';
import Defaulttoast from './Code/DefaultToastCode';
import DefaulttoastCode from './Code/DefaultToastCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultToast = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Toast</h4>
            <Defaulttoast />
          </div>
          <CodeDialog>{DefaulttoastCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultToast;
