import CardBox from 'src/components/shared/CardBox';
import NavigationDrawer from './Code/NavigationDrawerCode';
import NavigationDrawerCode from './Code/NavigationDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DrawerNavigation = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <NavigationDrawer />
          </div>
          <CodeDialog>{NavigationDrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DrawerNavigation;
