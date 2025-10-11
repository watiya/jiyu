import CardBox from 'src/components/shared/CardBox';
import NavWithdropdown from './Code/NavWithDropdownCode';
import NavWithdropdownCode from './Code/NavWithDropdownCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const NavWithDropdown = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Navbar With Dropdown</h4>
            <NavWithdropdown />
          </div>
          <CodeDialog>{NavWithdropdownCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default NavWithDropdown;
