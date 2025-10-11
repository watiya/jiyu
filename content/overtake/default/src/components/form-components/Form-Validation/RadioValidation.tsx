
import { Radio, Label, Button } from "flowbite-react";
import  { useState } from "react";
import TitleCard from "src/components/shared/TitleBorderCard";
import React from "react";
const RadioValidation = () => {
  // Radio Button
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };
  const handleSubmitradio = () => {
    alert(radioValue);
  };
  return (
    <div>
      <TitleCard title="Radio">
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-2 col-span-12 flex items-center gap-2">
            <Radio
              onChange={handleRadioChange}
              id="primaryColor"
              name="color"
              value="Primary"
            />
            <Label htmlFor="primaryColor">Primary</Label>
          </div>
          <div className="lg:col-span-2 col-span-12 flex items-center gap-2">
            <Radio
              onChange={handleRadioChange}
              id="errorColor"
              name="color"
              value="Error"
            />
            <Label htmlFor="errorColor">Error</Label>
          </div>
          <div className="lg:col-span-2 col-span-12 flex items-center gap-2">
            <Radio
              onChange={handleRadioChange}
              id="secondaryColor"
              name="color"
              value="Secondary"
            />
            <Label htmlFor="secondaryColor">Secondary</Label>
          </div>
          <div className="col-span-12 flex items-center gap-[1rem] justify-end">
            <Button
              onClick={handleSubmitradio}
              type="submit"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default RadioValidation;
