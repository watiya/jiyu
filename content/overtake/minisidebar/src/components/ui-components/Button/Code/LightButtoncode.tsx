import { Button } from "flowbite-react";

const LightButtonCode = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Button color="lightprimary">Primary</Button>
        <Button color="lightsecondary">Secondary</Button>
        <Button color="lightsuccess">Success</Button>
        <Button color="lightinfo">Info</Button>
        <Button color="lightwarning">Warning</Button>
        <Button color="lighterror">Danger</Button>
      </div>
    </>
  );
};

export default LightButtonCode;
