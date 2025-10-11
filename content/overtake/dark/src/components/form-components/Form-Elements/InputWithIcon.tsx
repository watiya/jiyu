import { Label, TextInput } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import { HiMail } from "react-icons/hi";
const InputWithIcon = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold">Input groups with icon</h4>
    <div className="mb-[0.375rem]">
      <div className="pb-3">
        <Label htmlFor="email4">Your email</Label>
        <TextInput
          id="email4"
          type="email"
          icon={HiMail}
          placeholder="name@matdash.com"
          required
          className="form-control"
        />
      </div>
      <div className="pb-3">
        <Label htmlFor="email4">Your email</Label>
        <TextInput
          id="email4"
          type="email"
          rightIcon={HiMail}
          placeholder="name@matdash.com"
          required
          className="form-control"
        />
      </div>
      <div className="pb-3">
        <Label htmlFor="email4">Your email</Label>
        <TextInput
          id="email4"
          type="email"
          icon={HiMail}
          rightIcon={HiMail}
          placeholder="name@matdash.com"
          required
          className="form-control"
        />
      </div>
      <div className="pb-3">
        <Label htmlFor="username3">Username</Label>
        <TextInput
          id="username3"
          placeholder="Bonnie Green"
          addon="@"
          required
          className="form-control"
        />
      </div>
    </div>
  </CardBox>
</div>

  );
};

export default InputWithIcon;
