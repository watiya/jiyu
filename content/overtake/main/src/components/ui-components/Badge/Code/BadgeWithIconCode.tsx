import { Badge } from 'flowbite-react';
import { HiCheck, HiClock } from 'react-icons/hi';

const BadgeWithIconCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge icon={HiCheck} color="primary">
          2 minutes ago
        </Badge>
        <Badge color="success" icon={HiClock}>
          3 days ago
        </Badge>
        <Badge color="error" icon={HiCheck}>
          4 days ago
        </Badge>
        <Badge color="info" icon={HiClock}>
          5 days ago
        </Badge>
      </div>
    </>
  );
};

export default BadgeWithIconCode;
