import { Tooltip, Button } from 'flowbite-react';

const PlacementTooltipCode = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-5">
        <div>
          <Tooltip content="Tooltip content" placement="top">
            <Button color={'primary'}>Tooltip top</Button>
          </Tooltip>
        </div>
        <div>
          <Tooltip content="Tooltip content" placement="right">
            <Button color="secondary">Tooltip right</Button>
          </Tooltip>
        </div>
        <div>
          <Tooltip content="Tooltip content" placement="bottom">
            <Button color="info">Tooltip bottom</Button>
          </Tooltip>
        </div>
        <div>
          <Tooltip content="Tooltip content" placement="left">
            <Button color="success">Tooltip left</Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default PlacementTooltipCode;
