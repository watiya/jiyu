import { Kbd } from 'flowbite-react';

const InsideTextCode = () => {
  return (
    <>
      <div>
        Please press <Kbd className="rounded-md">Ctrl</Kbd> +{' '}
        <Kbd className="rounded-md">Shift</Kbd> + <Kbd className="rounded-md">R</Kbd> to re-render
        an MDN page.
      </div>
    </>
  );
};

export default InsideTextCode;
