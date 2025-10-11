import { Button, Tooltip } from 'flowbite-react';

const DisableTooltipCode = () => {
  return (
    <>
      <div>
        <Tooltip content="Tooltip content" arrow={false}>
          <Button color="info">Default Tooltip</Button>
        </Tooltip>
      </div>
    </>
  );
};

export default DisableTooltipCode;
