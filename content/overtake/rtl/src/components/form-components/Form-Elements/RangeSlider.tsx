import { Label } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import { RangeSlider } from "flowbite-react";
const RangeSliders = () => {
  return (
<div>
  <CardBox>
    <h4 className="text-lg font-semibold">Range slider</h4>
    <div className="flex max-w-md flex-col gap-4 pb-12">
      <div>
        <Label htmlFor="default-range">Default</Label>
        <RangeSlider id="default-range" />
      </div>
      <div>
        <Label htmlFor="disbaled-range">Disabled</Label>
        <RangeSlider id="disabled-range" disabled />
      </div>
      <div>
        <Label htmlFor="sm-range">Small</Label>
        <RangeSlider id="default-range" sizing="sm" />
      </div>
      <div>
        <Label htmlFor="md-range">Medium</Label>
        <RangeSlider id="default-range" sizing="md" />
      </div>
      <div>
        <Label htmlFor="lg-range">Large</Label>
        <RangeSlider id="default-range" sizing="lg" />
      </div>
    </div>
  </CardBox>
</div>

  );
};

export default RangeSliders;
