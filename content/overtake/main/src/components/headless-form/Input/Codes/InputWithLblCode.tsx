import { Field, Input, Label } from "@headlessui/react";


const InputWithLblCode = () => {
  return (
    <>
    <div className="mt-4">
      <Field className="w-full mb-3">
          <Label className="mb-2 block text-ld">Name</Label>
          <Input
            type="text"
            className="ui-form-control rounded-full py-2.5 px-3 w-full"
            name="full_name"
          />
        </Field>
        <Field className="w-full mb-3">
          <Label className="mb-2 block text-ld">Email</Label>
          <Input
            type="email"
            className="ui-form-control rounded-full py-2.5 px-3 w-full"
            name="full_name"
          />
        </Field>
        <Field className="w-full ">
          <Label className="mb-2 block text-ld">Password</Label>
          <Input
            type="password"
            className="ui-form-control rounded-full py-2.5 px-3 w-full"
            name="full_name"
          />
        </Field>
    </div>
    </>
  )
}

export default InputWithLblCode
