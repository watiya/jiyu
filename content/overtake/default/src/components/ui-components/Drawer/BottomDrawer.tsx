import CardBox from 'src/components/shared/CardBox';
import Bottomdrawer from './Code/BottomDrawerCode';
import BottomdrawerCode from './Code/BottomDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const BottomDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Bottom Drawer</h4>
            <Bottomdrawer />
          </div>
          <CodeDialog>{BottomdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BottomDrawer;
