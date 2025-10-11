import CardBox from 'src/components/shared/CardBox';
import Defaultdrawer from './Code/DefaultDrawerCode';
import DefaultdrawerCode from './Code/DefaultDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default</h4>
            <Defaultdrawer />
          </div>
          <CodeDialog>{DefaultdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultDrawer;
