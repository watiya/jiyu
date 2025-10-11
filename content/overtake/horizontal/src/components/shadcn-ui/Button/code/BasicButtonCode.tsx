import { Button } from 'src/components/shadcn-ui/Default-Ui/button';

const BasicButtonCode = () => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mt-4">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
        <Button variant="info">Info</Button>
      </div>
    </>
  );
};

export default BasicButtonCode;
