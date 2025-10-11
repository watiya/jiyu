import { Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react';

const DropDownHeaderCode = () => {
  return (
    <>
      <div className='flex flex-wrap items-center gap-4'>
        <Dropdown
          label="Dropdown Button"
          dismissOnClick={false}
          className="flex-wrap"
          color="primary"
        >
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>

        <Dropdown label="Dropdown Button" color="secondary">
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </>
  );
};

export default DropDownHeaderCode;
