import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge';

const DefaultBadgeCode = () => {
  return (
    <>
      <div className="flex items-center gap-3 flex-wrap">
        <Badge>Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="error">Error</Badge>
      </div>
    </>
  );
};

export default DefaultBadgeCode;
