import { Badge } from 'flowbite-react';

const DefautBadgeCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="error">Danger</Badge>
      </div>
    </>
  );
};

export default DefautBadgeCode;
