import { Button, ButtonGroup } from 'flowbite-react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

const GroupWithIconCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 overflow-auto">
        <ButtonGroup outline>
          <Button color="info" className="hover:bg-info hover:text-white">
            <HiUserCircle className="mr-3 h-4 w-4" />
            Profile
          </Button>
          <Button color="info" className="hover:bg-info hover:text-white">
            <HiAdjustments className="mr-3 h-4 w-4" />
            Settings
          </Button>
          <Button color="info" className="hover:bg-info hover:text-white">
            <HiCloudDownload className="mr-3 h-4 w-4" />
            Messages
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="primary">
            <HiUserCircle className="mr-3 h-4 w-4" />
            Profile
          </Button>
          <Button color="primary">
            <HiAdjustments className="mr-3 h-4 w-4" />
            Settings
          </Button>
          <Button color="primary">
            <HiCloudDownload className="mr-3 h-4 w-4" />
            Messages
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="secondary">
            <HiUserCircle className="mr-3 h-4 w-4" />
            Profile
          </Button>
          <Button color="secondary">
            <HiAdjustments className="mr-3 h-4 w-4" />
            Settings
          </Button>
          <Button color="secondary">
            <HiCloudDownload className="mr-3 h-4 w-4" />
            Messages
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default GroupWithIconCode;
