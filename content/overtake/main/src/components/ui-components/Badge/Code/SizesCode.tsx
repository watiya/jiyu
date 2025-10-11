import { Badge } from 'flowbite-react';

const SizesCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Badge color="primary" size="xs">
          Primary
        </Badge>
        <Badge color="secondary" size="xs">
          Secondary
        </Badge>
        <Badge color="success" size="xs">
          Success
        </Badge>
        <Badge color="info" size="xs">
          Info
        </Badge>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge color="primary" size="sm">
          Primary
        </Badge>
        <Badge color="secondary" size="sm">
          Secondary
        </Badge>
        <Badge color="success" size="sm">
          Success
        </Badge>
        <Badge color="info" size="sm">
          Info
        </Badge>
      </div>
    </>
  );
};

export default SizesCode;
