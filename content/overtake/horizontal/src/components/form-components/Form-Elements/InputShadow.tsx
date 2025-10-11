import { Label, TextInput, Checkbox, Button } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import { Link } from "react-router";

const InputShadow = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold">Inputs With Shadow</h4>
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="email2">Your email</Label>
        <TextInput
          id="email2"
          type="email"
          placeholder="name@matdash.com"
          required
          shadow
          className="form-control"
        />
      </div>
      <div>
        <Label htmlFor="password2">Your password</Label>
        <TextInput
          id="password2"
          type="password"
          required
          shadow
          className="form-control"
        />
      </div>
      <div>
        <Label htmlFor="repeat-password">Repeat password</Label>
        <TextInput
          id="repeat-password"
          type="password"
          required
          shadow
          className="form-control"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" className="checkbox" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link
            to="#"
            className="text-priamry hover:underline dark:text-primary"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit" color="primary">
        Register new account
      </Button>
    </form>
  </CardBox>
</div>

  );
};

export default InputShadow;
