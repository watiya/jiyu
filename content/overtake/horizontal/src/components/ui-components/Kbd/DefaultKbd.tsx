import CardBox from 'src/components/shared/CardBox';
import Defaultkbd from './Code/DefaultKbdCode';
import DefaultkbdCode from './Code/DefaultKbdCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultKbd = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default KDB</h4>
            <Defaultkbd />
          </div>
          <CodeDialog>{DefaultkbdCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultKbd;
