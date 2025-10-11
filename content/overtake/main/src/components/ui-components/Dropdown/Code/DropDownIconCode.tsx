import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from 'react-icons/hi';

const DropDownIconCode = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Dropdown label="Dropdown" color="info">
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem icon={HiViewGrid}>Dashboard</DropdownItem>
          <DropdownItem icon={HiCog}>Settings</DropdownItem>
          <DropdownItem icon={HiCurrencyDollar}>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem icon={HiLogout}>Sign out</DropdownItem>
        </Dropdown>
        <div>
          <h4 className="text-lg font-semibold">Inline dropdown</h4>
          <Dropdown label="Dropdown" inline>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default DropDownIconCode;
