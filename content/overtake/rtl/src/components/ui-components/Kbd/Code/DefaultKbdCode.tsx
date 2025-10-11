import { Kbd } from 'flowbite-react';

const DefaultKbdCode = () => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Kbd className="rounded-md">Shift</Kbd>
        <Kbd className="rounded-md">Ctrl</Kbd>
        <Kbd className="rounded-md">Tab</Kbd>
        <Kbd className="rounded-md">Caps Lock</Kbd>
        <Kbd className="rounded-md">Esc</Kbd>
        <Kbd className="rounded-md">Spacebar</Kbd>
        <Kbd className="rounded-md">Enter</Kbd>
      </div>
    </>
  );
};

export default DefaultKbdCode;
