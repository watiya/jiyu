import CardBox from 'src/components/shared/CardBox';
import SidebarWithlogo from './Code/SidebarWithLogoCode';
import SidebarWithlogoCode from './Code/SidebarWithLogoCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const SidebarWithLogo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Sidebar with logo</h4>
          <SidebarWithlogo />
        </div>
        <CodeDialog>{SidebarWithlogoCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default SidebarWithLogo;
