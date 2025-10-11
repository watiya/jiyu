import CardBox from 'src/components/shared/CardBox';
import Leftdrawer from './Code/LeftDrawerCode';
import LeftdrawerCode from './Code/LeftDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LeftDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Left Drawer</h4>
            <Leftdrawer />
          </div>
          <CodeDialog>{LeftdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LeftDrawer;
