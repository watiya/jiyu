import { Label, TextInput } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const InputSizing = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold">Input sizing</h4>
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <Label htmlFor="small">Small input</Label>
        <TextInput id="small" type="text" sizing="sm" className="form-control" />
      </div>
      <div>
        <Label htmlFor="base">Base input</Label>
        <TextInput id="base" type="text" sizing="md" className="form-control" />
      </div>
      <div>
        <Label htmlFor="large">Large input</Label>
        <TextInput id="large" type="text" sizing="lg" className="form-control" />
      </div>
    </div>
  </CardBox>
</div>

  );
};

export default InputSizing;
