import { Badge } from 'flowbite-react';

const LinkBadgeCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <a href="#">
          <Badge color="primary">Badge Link 1</Badge>
        </a>

        <a href="#">
          <Badge color="secondary">Badge Link 2</Badge>
        </a>

        <a href="#">
          <Badge color="error">Badge Link 3</Badge>
        </a>

        <a href="#">
          <Badge color="warning">Badge Link 4</Badge>
        </a>
      </div>
    </>
  );
};

export default LinkBadgeCode;
