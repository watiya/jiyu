import { Description, Field, Label, Textarea } from '@headlessui/react';

const DisableTextAreaCode = () => {
  return (
    <>
      <div>
        <Field disabled>
          <Label className="text-ld mb-1 block font-medium data-disabled:opacity-50">
            Type Here
          </Label>
          <Description className="text-bodytext text-xs mb-2 data-disabled:opacity-50">
            Add any extra information about your event here.
          </Description>
          <Textarea
            name="description"
            className="ui-form-control rounded-md data-disabled:bg-gray-100 dark:data-disabled:bg-dark"
            rows={6}
          ></Textarea>
        </Field>
      </div>
    </>
  );
};

export default DisableTextAreaCode;
