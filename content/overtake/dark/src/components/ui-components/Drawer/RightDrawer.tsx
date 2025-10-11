import CardBox from 'src/components/shared/CardBox';
import Rightdrawer from './Code/RightDrawerCode';
import RightdrawerCode from './Code/RightDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const RightDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Right Drawer</h4>
            <Rightdrawer />
          </div>
          <CodeDialog>{RightdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RightDrawer;
