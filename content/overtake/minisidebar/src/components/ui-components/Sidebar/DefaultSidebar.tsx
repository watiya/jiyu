import CardBox from 'src/components/shared/CardBox';
import Defaultsidebar from './Code/DefaultSidebarCode';
import DefaultsidebarCode from './Code/DefaultSidebarCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultSidebar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Sidebar</h4>
            <Defaultsidebar />
          </div>
          <CodeDialog>{DefaultsidebarCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultSidebar;
