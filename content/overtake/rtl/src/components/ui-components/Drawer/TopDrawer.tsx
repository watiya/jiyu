import CardBox from 'src/components/shared/CardBox';
import Topdrawer from './Code/TopDrawerCode';
import TopdrawerCode from './Code/TopDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const TopDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Top Drawer</h4>
            <Topdrawer />
          </div>
          <CodeDialog>{TopdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TopDrawer;
