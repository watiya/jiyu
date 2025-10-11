import { Spinner } from 'flowbite-react';

const AlignSpinnerCode = () => {
  return (
    <div>
      <div className='w-1/3'>
        <div className="text-left">
          <Spinner aria-label="Left-aligned spinner example" />
        </div>
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
        <div className="text-right">
          <Spinner aria-label="Right-aligned spinner example" />
        </div>
      </div>
    </div>
  );
};

export default AlignSpinnerCode;
