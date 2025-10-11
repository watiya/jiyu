import { Button, Spinner } from 'flowbite-react';

const LoadButtonCode = () => {
  return (
    <div>
      <div className="flex flex-row gap-3 py-3">
        <Button color="primary">
          <Spinner aria-label="Spinner button example" size="sm" />
          <span className="pl-3">Loading...</span>
        </Button>
        <Button color="gray">
          <Spinner aria-label="Alternate spinner button example" size="sm" />
          <span className="pl-3">Loading...</span>
        </Button>
      </div>
    </div>
  );
};

export default LoadButtonCode;
