import { HelperText, Label, TextInput } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const FormHelperText = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold mb-2">Form Helper Text</h4>
    <div className="max-w-md">
      <Label htmlFor="email3">Your email</Label>
      <TextInput
        id="email3"
        type="email"
        placeholder="name@matdash.com"
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
  </CardBox>
</div>

  );
};

export default FormHelperText;
