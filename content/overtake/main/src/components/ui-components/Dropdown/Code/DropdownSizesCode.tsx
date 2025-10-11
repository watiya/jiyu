import { Dropdown, DropdownItem } from "flowbite-react";

const DropdownSizesCode = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <Dropdown label="Small dropdown" size="sm" color="success">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Large dropdown" size="lg" color="error">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </>
  );
};

export default DropdownSizesCode;
