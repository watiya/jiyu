import { Label, TextInput, Button, HelperText } from "flowbite-react";

import TitleCard from "src/components/shared/TitleBorderCard";

const ReadOnlyForm = () => {
  return (
    <div>
      <TitleCard title="Readonly Form">
        <div className="grid grid-cols-4 gap-30">
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="name">Name</Label>
            </div>
            <TextInput
              id="name"
              type="text"
              value={"Wrappixel"}
              sizing="md"
              className="form-control"
            />
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="emailid">Email</Label>
            </div>
            <TextInput
              id="emailid"
              type="email"
              value={"info@wrappixel.com"}
              required
              className="form-control"
            />
            <HelperText><>
                  We’ll never share your details. Read our
                  <a
                    href="#"
                    className="ml-1 font-medium text-primary hover:underline dark:text-primary"
                  >
                    Privacy Policy
                  </a>
                  .
                </></HelperText>
          </div>
          <div className="col-span-12">
            <div className="mb-2 block">
              <Label htmlFor="password1">Password</Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              value={"info@wrappixel.com"}
              className="form-control"
              required
            />
          </div>
          <div className="col-span-12">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default ReadOnlyForm;
