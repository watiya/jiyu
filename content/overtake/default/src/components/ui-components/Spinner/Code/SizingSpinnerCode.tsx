import { Spinner } from 'flowbite-react';

const SizingSpinnerCode = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <Spinner aria-label="Extra small spinner example" size="xs" />
        <Spinner aria-label="Small spinner example" size="sm" />
        <Spinner aria-label="Medium sized spinner example" size="md" />
        <Spinner aria-label="Large spinner example" size="lg" />
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    </div>
  );
};

export default SizingSpinnerCode;
