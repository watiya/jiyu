import { IconUser, IconMail, IconLock } from "@tabler/icons-react";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";

import TitleCard from "src/components/shared/TitleBorderCard";

const FormWithRightIcon = () => {
  return (
    <div>
<TitleCard title="Form with Right Icon">
  <div className="grid grid-cols-6 gap-30">
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="username">Username</Label>
      </div>
      <TextInput
        id="username"
        type="text"
        rightIcon={() => <IconUser size={20} />}
        placeholder="yourusername"
        required
        className="form-control"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="email">Email</Label>
      </div>
      <TextInput
        id="email"
        type="email"
        rightIcon={() => <IconMail size={20} />}
        placeholder="name@matdash.com"
        required
        className="form-control"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="password">Password</Label>
      </div>
      <TextInput
        id="password"
        type="password"
        rightIcon={() => <IconLock size={20} />}
        placeholder="Password"
        required
        className="form-control"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="confirmpassword">Confirm Password</Label>
      </div>
      <TextInput
        id="confirmpassword"
        type="password"
        rightIcon={() => <IconLock size={20} />}
        placeholder="Confirm Password"
        required
        className="form-control"
      />
    </div>

    <div className="flex items-center gap-2 col-span-12">
      <Checkbox className="checkbox" id="remember" />
      <Label htmlFor="remember">Remember me!</Label>
    </div>

    <div className="col-span-12 flex items-center gap-[1rem]">
      <Button type="reset" color="error">
        Cancel
      </Button>
      <Button type="submit" color="primary">
        Submit
      </Button>
    </div>
  </div>
</TitleCard>

    </div>
  );
};

export default FormWithRightIcon;
