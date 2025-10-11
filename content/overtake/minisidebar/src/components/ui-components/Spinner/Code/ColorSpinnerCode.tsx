import { Spinner } from 'flowbite-react';

const ColorSpinnerCode = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-3 pt-3">
        <Spinner color="info" aria-label="Info spinner example" />
        <Spinner color="success" aria-label="Success spinner example" />
        <Spinner color="failure" aria-label="Failure spinner example" />
        <Spinner color="warning" aria-label="Warning spinner example" />
        <Spinner color="pink" aria-label="Pink spinner example" />
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
    </div>
  );
};

export default ColorSpinnerCode;
