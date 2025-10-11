import { Progress } from 'flowbite-react';

const ProgressSizeCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={45} size="sm" color="primary" />
      <div className="text-base font-medium dark:text-white">Default</div>
      <Progress progress={45} size="md" color="primary" />
      <div className="text-lg font-medium dark:text-white">Large</div>
      <Progress progress={45} size="lg" color="primary" />
      <div className="text-lg font-medium dark:text-white">Extra Large</div>
      <Progress progress={45} size="xl" color="primary" />
    </div>
  );
};

export default ProgressSizeCode;
