
import SquareInputsCodes from "./Codes/SquareInputs";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import CardBox from "src/components/shared/CardBox";

const SquareInputs = () => {
  return (
<div>
  <CardBox>
    <div className="flex justify-between">
      <h4 className="text-lg font-semibold">Square Inputs form</h4>
      <SquareInputsCodes />
    </div>

    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email1">Your email</Label>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@matdash.com"
          required
          className="form-rounded-md"
        />
      </div>
      <div>
        <Label htmlFor="password1">Your password</Label>
        <TextInput
          id="password1"
          type="password"
          required
          className="form-rounded-md"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox className="checkbox" id="remember1" />
        <Label htmlFor="remember1">Remember me</Label>
      </div>
      <Button type="submit" className="rounded-md" color="primary">
        Submit
      </Button>
    </form>
  </CardBox>
</div>

  );
};

export default SquareInputs;
