import { Button, Tooltip } from 'flowbite-react';

const TooltipStyleCode = () => {
  return (
    <>
      <div className="flex gap-2">
        <Tooltip content="Tooltip content" style="light">
          <Button color="primary">Light Tooltip</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" style="dark">
          <Button color="secondary">Dark Tooltip</Button>
        </Tooltip>
      </div>
    </>
  );
};

export default TooltipStyleCode;
