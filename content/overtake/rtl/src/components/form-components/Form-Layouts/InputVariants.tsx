import { Label, TextInput } from "flowbite-react";

import TitleCard from "src/components/shared/TitleBorderCard";

const InputVariants = () => {
  return (
    <div>
<TitleCard title="Input Variants">
  <div className="grid grid-cols-12 gap-6">
    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="input-gray" color="gray">Gray</Label>
      </div>
      <TextInput
        id="input-gray"
        placeholder="Input Gray"
        required
        className="form-control-validation"
        color="gray"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="input-info" color="info">Info</Label>
      </div>
      <TextInput
        id="input-info"
        placeholder="Input Info"
        required
        className="form-control-validation"
        color="info"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="input-success" color="success">Success</Label>
      </div>
      <TextInput
        id="input-success"
        placeholder="Input Success"
        required
        className="form-control-validation"
        color="success"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="input-failure" color="failure">Failure</Label>
      </div>
      <TextInput
        id="input-failure"
        placeholder="Input Failure"
        required
        className="form-control-validation"
        color="failure"
      />
    </div>

    <div className="col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="input-warning" color="warning">Warning</Label>
      </div>
      <TextInput
        id="input-warning"
        placeholder="Input Warning"
        required
        className="form-control-validation"
        color="warning"
      />
    </div>
  </div>
</TitleCard>

    </div>
  );
};

export default InputVariants;
