import {
  Label,
  TextInput,
  Textarea,
  Checkbox,
  Radio,
  Select,
  Button,
} from "flowbite-react";

import TitleCard from "src/components/shared/TitleBorderCard";

const DefaultForm = () => {
  return (
    <div>
<TitleCard title="Default Form">
  <div className="grid grid-cols-6 gap-[1.875rem]">
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="defaultText">Default Text</Label>
      </div>
      <TextInput
        id="defaultText"
        type="text"
        placeholder="Marcal"
        sizing="md"
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
        placeholder="name@matdash.com"
        className="form-control"
        required
      />
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="password">Password</Label>
      </div>
      <TextInput
        id="password"
        type="password"
        className="form-control"
        required
      />
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="comment">Your message</Label>
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        required
        className="form-control-textarera rounded-md"
        rows={4}
      />
    </div>
    <div className="sm:flex items-center gap-[1.875rem] col-span-12">
      <div className="flex flex-col gap-[1rem]">
        <div className="flex items-center gap-2">
          <Checkbox id="promotion" className="checkbox" />
          <Label htmlFor="promotion">I want to get promotional offers</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="promotion1" className="checkbox" />
          <Label htmlFor="promotion1">I want to get promotional offers</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="promotion2" className="checkbox" />
          <Label htmlFor="promotion2">I want to get promotional offers</Label>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] md:mt-0 mt-6">
        <div className="flex items-center gap-2">
          <Radio
            id="radio-usa"
            name="countries"
            value="USA"
            defaultChecked
          />
          <Label htmlFor="radio-usa">United States</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="radio-germany" name="countries" value="Germany" />
          <Label htmlFor="radio-germany">Germany</Label>
        </div>
        <div className="flex items-center gap-2">
          <Radio id="radio-spain" name="countries" value="Spain" />
          <Label htmlFor="radio-spain">Spain</Label>
        </div>
      </div>
    </div>
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="select-country">Select</Label>
      </div>
      <Select id="select-country" required className="select-md">
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
      <div className="pt-5">
        <Button type="submit" color="primary">
          Submit
        </Button>
      </div>
    </div>
  </div>
</TitleCard>
    </div>
  );
};

export default DefaultForm;
