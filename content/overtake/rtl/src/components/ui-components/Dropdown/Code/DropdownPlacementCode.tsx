import { Dropdown, DropdownItem } from 'flowbite-react';

const DropdownPlacementCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Dropdown label="Dropdown top" placement="top" color="primary">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown right" placement="right" color="secondary">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown bottom" placement="bottom" color="info">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown left" placement="left" color="success">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown left start" placement="left-start" color="error">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <Dropdown label="Dropdown right start" placement="right-start" color="dark">
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
      </div>
    </>
  );
};

export default DropdownPlacementCode;
