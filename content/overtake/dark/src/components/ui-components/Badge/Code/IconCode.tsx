import { Badge } from "flowbite-react";
import { HiCheck, HiClock } from "react-icons/hi";

const IconCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" icon={HiCheck} />
        <Badge color="secondary" icon={HiClock} />
        <Badge color="primary" size="sm" icon={HiCheck} />
        <Badge color="secondary" size="sm" icon={HiClock} />
        <Badge color="error" size="sm" icon={HiCheck} />
        <Badge color="warning" size="sm" icon={HiClock} />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge color="lightprimary" icon={HiCheck} />
        <Badge color="lightsecondary" icon={HiClock} />
        <Badge color="lightprimary" size="sm" icon={HiCheck} />
        <Badge color="lightsecondary" size="sm" icon={HiClock} />
        <Badge color="lighterror" size="sm" icon={HiCheck} />
        <Badge color="lightwarning" size="sm" icon={HiClock} />
      </div>
    </>
  );
};

export default IconCode;
