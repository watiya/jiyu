import { Button } from "flowbite-react";

const DefaultButtonCode = () => {
  return (
    <>
      <div className="flex gap-4 flex-wrap mt-2">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Danger</Button>
        <Button color="light">Light</Button>
        <Button color="dark">Dark</Button>
      </div>
    </>
  );
};

export default DefaultButtonCode;
