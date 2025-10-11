import { Progress } from 'flowbite-react';

const LabelProgressCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <Progress progress={20} textLabel="Progress" size="lg" labelProgress labelText />
      <Progress progress={40} textLabel="Progress" size="lg" labelProgress labelText />
      <Progress progress={60} textLabel="Progress" size="lg" labelProgress labelText />
      <Progress progress={80} textLabel="Progress" size="lg" labelProgress labelText />
      <Progress progress={100} textLabel="Progress" size="lg" labelProgress labelText />
    </div>
  );
};

export default LabelProgressCode;
