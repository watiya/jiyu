
import CardBox from "src/components/shared/CardBox";
import { Label, Select } from "flowbite-react";

const SelectInput = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">Select Input</h4>
        <div className="pb-6">
          <div className="mb-2 block">
            <Label htmlFor="countries">Select your country</Label>
          </div>
          <Select id="countries" required className="select-md"> 
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
      </CardBox>
    </div>
  );
};

export default SelectInput;
