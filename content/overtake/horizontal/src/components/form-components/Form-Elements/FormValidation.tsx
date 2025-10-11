import { HelperText, Label, TextInput } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const FormValidation = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold">Form validation</h4>
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="username3" color="success">Your name</Label>
        <TextInput
          id="username3"
          placeholder="Bonnie Green"
          required
          color="success"
          className="form-control-validation"
        />
        <HelperText><>
              <span className="font-medium">Alright!</span> Username available!
            </></HelperText>
      </div>
      <div>
        <Label htmlFor="username4" color="failure">Your name</Label>
        <TextInput
          id="username4"
          placeholder="Bonnie Green"
          required
          className="form-control-validation"
          color="failure"
        />
        <HelperText><>
              <span className="font-medium">Oops!</span> Username already taken!
            </></HelperText>
      </div>
    </div>
  </CardBox>
</div>

  );
};

export default FormValidation;
