import { Badge } from 'flowbite-react';

const LightBadgeCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge color="lightprimary">Primary</Badge>
        <Badge color="lightsecondary">Secondary</Badge>
        <Badge color="lightsuccess">Success</Badge>
        <Badge color="lightinfo">Info</Badge>
        <Badge color="lightwarning">Warning</Badge>
        <Badge color="lighterror">Danger</Badge>
      </div>
    </>
  );
};

export default LightBadgeCode;
