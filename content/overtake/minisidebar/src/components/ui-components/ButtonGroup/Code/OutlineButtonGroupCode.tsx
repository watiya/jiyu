import { Button, ButtonGroup } from 'flowbite-react';

const OutlineButtonGroupCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 overflow-auto">
        <ButtonGroup outline>
          <Button className="border-border dark:border-darkborder hover:bg-primary hover:border-primary dark:text-gray-400 text-gray-900">
            Profile
          </Button>
          <Button className="border-border dark:border-darkborder hover:bg-primary hover:border-primary dark:text-gray-400 text-gray-900">
            Settings
          </Button>
          <Button className="border-border dark:border-darkborder hover:bg-primary hover:border-primary dark:text-gray-400 text-gray-900">
            Messages
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="primary">Profile</Button>
          <Button color="primary">Settings</Button>
          <Button color="primary">Messages</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="primary">Profile</Button>
          <Button color="primary">Settings</Button>
          <Button color="primary">Messages</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default OutlineButtonGroupCode;
