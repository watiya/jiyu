import { Progress } from 'flowbite-react';

const DefaultProgressCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <Progress progress={20} />
      <Progress progress={40} />
      <Progress progress={60} />
      <Progress progress={80} />
      <Progress progress={100} />
    </div>
  );
};

export default DefaultProgressCode;
