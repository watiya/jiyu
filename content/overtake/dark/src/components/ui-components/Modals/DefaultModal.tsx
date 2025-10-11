import CardBox from 'src/components/shared/CardBox';
import Defaultmodal from './Code/DefaultModalCode';
import DefaultModalCode from './Code/DefaultModalCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultModal = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Modal</h4>
            <Defaultmodal />
          </div>
          <CodeDialog>{DefaultModalCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultModal;
