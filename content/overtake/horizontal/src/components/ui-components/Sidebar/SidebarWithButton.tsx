import CardBox from 'src/components/shared/CardBox';
import SidebarWithbutton from './Code/SidebarWithButtonCode';
import SidebarWithbuttonCode from './Code/SidebarWithButtonCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const SidebarWithButton = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Sidebar with button</h4>
            <SidebarWithbutton />
          </div>
          <CodeDialog>{SidebarWithbuttonCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SidebarWithButton;
