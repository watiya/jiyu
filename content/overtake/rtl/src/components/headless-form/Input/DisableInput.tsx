
import CardBox from "src/components/shared/CardBox";
import { Description, Field, Input, Label } from "@headlessui/react";


const DisabledInput = () => {
  return (
    <div>
      <CardBox>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Disabled Input With Description</h4>
        </div>
        <Field className="w-full cursor-not-allowed mb-3" disabled>
          <Label className="mb-1 block text-ld data-disabled:opacity-50">Name</Label>
          <Description className="text-bodytext text-xs data-disabled:opacity-50">
            Use your real name so people will recognize you.
          </Description>
          <Input
            type="text"
            className="ui-form-control rounded-md py-2.5 px-3 w-full mt-2 data-disabled:opacity-50"
            name="full_name"
          />
        </Field>
        <Field className="w-full cursor-not-allowed mb-3" disabled>
          <Label className="mb-1 block text-ld data-disabled:opacity-50">Email</Label>
          <Description className="text-bodytext text-xs data-disabled:opacity-50">
            Use your real Email so people will recognize you.
          </Description>
          <Input
            type="email"
            className="ui-form-control rounded-md py-2.5 px-3 w-full mt-2 data-disabled:opacity-50"
            name="full_name"
          />
        </Field>
        <Field className="w-full cursor-not-allowed " disabled>
          <Label className="mb-1 block text-ld data-disabled:opacity-50">Password</Label>
          <Description className="text-bodytext text-xs data-disabled:opacity-50">
            Use your real Password so people will recognize you.
          </Description>
          <Input
            type="password"
            className="ui-form-control rounded-md py-2.5 px-3 w-full mt-2 data-disabled:opacity-50"
            name="full_name"
          />
        </Field>
      </CardBox>
    </div>
  );
};

export default DisabledInput;
