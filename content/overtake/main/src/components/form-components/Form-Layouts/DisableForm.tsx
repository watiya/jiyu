import { Label, TextInput, Button, HelperText } from "flowbite-react";

import TitleCard from "src/components/shared/TitleBorderCard";

const DisableForm = () => {
  return (
    <div>
<TitleCard title="Disabled Form">
  <div className="grid grid-cols-4 gap-30">
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="disabledName">Name</Label>
      </div>
      <TextInput
        id="disabledName"
        type="text"
        sizing="md"
        className="form-control"
        disabled
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="disabledEmail">Email</Label>
      </div>
      <TextInput
        id="disabledEmail"
        type="email"
        required
        className="form-control"
        disabled
      />
      <HelperText>
      <>
            We’ll never share your details. Read our
            <a
              href="#"
              className="ml-1 font-medium text-primary hover:underline dark:text-primary"
            >
              Privacy Policy
            </a>
            .
          </>        
      </HelperText>
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="disabledPassword">Password</Label>
      </div>
      <TextInput
        id="disabledPassword"
        type="password"
        className="form-control"
        disabled
      />
    </div>

    <div className="col-span-12">
      <Button type="submit" color="primary" disabled>
        Submit
      </Button>
    </div>
  </div>
</TitleCard>
    </div>
  );
};

export default DisableForm;
