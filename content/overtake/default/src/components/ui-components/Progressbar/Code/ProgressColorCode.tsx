import { Progress } from 'flowbite-react';

const ProgressColorCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium text-primary">Primary</div>
      <Progress progress={45} color="primary" />
      <div className="text-base font-medium text-secondary">Secondary</div>
      <Progress progress={45} color="secondary" />
      <div className="text-base font-medium text-error">Error</div>
      <Progress progress={45} color="error" />
      <div className="text-base font-medium text-success">Success</div>
      <Progress progress={45} color="success" />
      <div className="text-base font-medium text-warning">Warning</div>
      <Progress progress={45} color="warning" />
      <div className="text-base font-medium text-info">Info</div>
      <Progress progress={45} color="info" />
    </div>
  );
};

export default ProgressColorCode;
