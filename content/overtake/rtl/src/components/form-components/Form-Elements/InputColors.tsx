import { Label, TextInput } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const InputColors = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold mb-2">Input Element Colors</h4>
    <div className="grid grid-cols-12 gap-30">
      <div className="md:col-span-6 col-span-12">
        <Label htmlFor="input-gray" color="gray">Gray</Label>
        <TextInput
          id="input-gray"
          placeholder="Input Gray"
          required
          color="gray"
          className="form-control-validation"
        />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Label htmlFor="input-info" color="info">Info</Label>
        <TextInput
          id="input-info"
          placeholder="Input Info"
          required
          color="info"
          className="form-control-validation"
        />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Label htmlFor="input-success" color="success">Success</Label>
        <TextInput
          id="input-success"
          placeholder="Input Success"
          required
          color="success"
          className="form-control-validation"
        />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Label htmlFor="input-failure" color="failure">Failure</Label>
        <TextInput
          id="input-failure"
          placeholder="Input Failure"
          required
          color="failure"
          className="form-control-validation"
        />
      </div>
      <div className="md:col-span-6 col-span-12">
        <Label htmlFor="input-warning" color="warning">Warning</Label>
        <TextInput
          id="input-warning"
          placeholder="Input Warning"
          required
          color="warning"
          className="form-control-validation"
        />
      </div>
    </div>
  </CardBox>
</div>

  );
};

export default InputColors;
