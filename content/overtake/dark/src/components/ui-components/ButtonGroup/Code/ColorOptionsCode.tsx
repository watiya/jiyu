import { Button, ButtonGroup } from 'flowbite-react';

const ColorOptionsCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 overflow-auto">
        <ButtonGroup>
          <Button color="primary">Profile</Button>
          <Button color="primary">Settings</Button>
          <Button color="primary">Messages</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="info">Profile</Button>
          <Button color="info">Settings</Button>
          <Button color="info">Messages</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="success">Profile</Button>
          <Button color="success">Settings</Button>
          <Button color="success">Messages</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default ColorOptionsCode;
