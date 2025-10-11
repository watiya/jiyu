import CardBox from 'src/components/shared/CardBox';
import Defaultlist from './Code/DefaultListCode';
import Defaultlistcode from './Code/DefaultListCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultList = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default list group</h4>
            <Defaultlist />
          </div>
          <CodeDialog>{Defaultlistcode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultList;
