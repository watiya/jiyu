import { Button, Tooltip } from 'flowbite-react';

const TooltipTriggerCode = () => {
  return (
    <>
      <div className="flex gap-2">
        <Tooltip content="Tooltip content" trigger="hover">
          <Button color="primary">Tooltip Hover</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" trigger="click">
          <Button color="secondary">Tooltip Click</Button>
        </Tooltip>
      </div>
    </>
  );
};

export default TooltipTriggerCode;
