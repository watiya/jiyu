
import { useState } from "react";

import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  Progress,
  Radio,
  RangeSlider,
  Select,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";

import { IconVolume, IconVolume2 } from "@tabler/icons-react";
import TitleCard from "../shared/TitleBorderCard";

const FormsCustom = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);
  return (
    <>
<TitleCard title="Ordrinary Form">
  <div className="grid grid-cols-12 gap-6">
    <div className="lg:col-span-4 col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="name">Name</Label>
      </div>
      <TextInput
        id="name"
        type="text"
        placeholder="Enter text"
        className="form-control"
        required
      />
    </div>
    <div className="lg:col-span-4 col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="companyname">Company Name</Label>
      </div>
      <TextInput
        id="companyname"
        type="text"
        placeholder="Enter text"
        className="form-control"
        required
      />
    </div>
    <div className="lg:col-span-4 col-span-12">
      <div className="mb-2 block">
        <Label htmlFor="disabledInput">Industry Type</Label>
      </div>
      <TextInput
        type="text"
        id="disabledInput"
        placeholder="Disabled filled"
        className="form-control"
        disabled
        readOnly
      />
    </div>
    <div className="lg:col-span-6 col-span-12">
      <div className="col-span-3 mb-2">
        <Label htmlFor="dropdown">Select Dropdown</Label>
      </div>
      <div className="col-span-6">
        <Select id="gender" required className="select-md">
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </Select>
      </div>
    </div>
    <div className="lg:col-span-6 col-span-12">
      <div className="col-span-3 mb-2">
        <Label htmlFor="date">Date</Label>
      </div>
      <div className="col-span-6">
        <Datepicker className="form-control" />
      </div>
    </div>
  </div>
  <div className="grid grid-cols-12 gap-[1.875rem]">
    <div className="col-span-12 mt-[1.875rem]">
      <div className="mb-2 block">
        <Label htmlFor="gender">Lorem ipsum dolor sit amet</Label>
      </div>
      <div className="grid grid-cols-12 items-center gap-[1.875rem]">
        <div className="md:col-span-4 col-span-12 flex items-center gap-2">
          <Radio id="gender" name="gender" value="Male" defaultChecked />
          <Label htmlFor="male">Male</Label>
        </div>
        <div className="md:col-span-4 col-span-12 flex items-center gap-2">
          <Radio id="female" name="gender" value="Female" />
          <Label htmlFor="female">Female</Label>
        </div>
        <div className="md:col-span-4 col-span-12 flex items-center gap-2">
          <Radio id="other" name="other" value="Other" disabled />
          <Label htmlFor="male">Disabled</Label>
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-12 gap-[1.875rem]">
    <div className="col-span-12 mt-[1.875rem]">
      <div className="mb-2 block">
        <Label htmlFor="gender">Industry Type</Label>
      </div>
      <div className="grid grid-cols-12 items-center gap-[1.875rem]">
        <div className="md:col-span-4 col-span-12 flex items-center gap-2">
          <Checkbox id="age" className="checkbox" />
          <Label htmlFor="age">Enter text</Label>
        </div>
        <div className="md:col-span-4 col-span-12 flex items-center gap-2">
          <Checkbox id="age1" className="checkbox" />
          <Label htmlFor="age1">Enter text</Label>
        </div>
        <div className="md:col-span-4 col-span-12 flex items-center gap-2">
          <Checkbox id="age2" className="checkbox" disabled />
          <Label htmlFor="age2" disabled>
            Disabled
          </Label>
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-12 gap-[1.875rem]">
    <div className="col-span-12 mt-[1.875rem]">
      <div className="mb-2 block">
        <Label htmlFor="gender">Switch</Label>
      </div>
      <div className="grid grid-cols-12 items-center gap-[1.875rem]">
        <div className="lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2">
          <ToggleSwitch
            checked={switch1}
            label="Enter text"
            onChange={setSwitch1}
          />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2">
          <ToggleSwitch
            checked={switch2}
            label="Enter text"
            onChange={setSwitch2}
          />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2">
          <ToggleSwitch
            checked={false}
            disabled
            label="Enter text"
            onChange={() => undefined}
          />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-6 flex items-center gap-2">
          <ToggleSwitch
            checked={true}
            disabled
            label="Enter text"
            onChange={() => undefined}
          />
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-12 gap-6">
    <div className="lg:col-span-4 col-span-12">
      <div className="mt-6">
        <div className="mb-1 block">
          <Label htmlFor="default-range">Slider</Label>
        </div>
        <RangeSlider id="default-range" />
        <div className="flex items-center justify-between mt-3">
          <div>
            <div className="col-span-6">
              <Select id="gender" required className="select-md">
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="col-span-6">
              <Select id="gender" required className="select-md">
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-12 sm:gap-6 gap-6">
    <div className="lg:col-span-4 col-span-12">
      <div className="mt-6">
        <Progress progress={45} />
        <div className="flex items-center justify-between mt-3">
          <IconVolume2 stroke={2} />
          <IconVolume stroke={2} />
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-12 pt-[1.875rem] gap-6">
    <div className="md:col-span-2 col-span-6">
      <Button color="primary">Add New</Button>
    </div>
    <div className="md:col-span-2 col-span-6">
      <Button color="secondary" disabled>
        Add New
      </Button>
    </div>
    <div className="md:col-span-2 col-span-6">
      <Button color="success">Success</Button>
    </div>
    <div className="md:col-span-2 col-span-6">
      <Button color="info">Info</Button>
    </div>
    <div className="md:col-span-2 col-span-6">
      <Button color="warning">Warning</Button>
    </div>
    <div className="md:col-span-2 col-span-6">
      <Button color="error">Danger</Button>
    </div>
  </div>
</TitleCard>

    </>
  );
};

export default FormsCustom;
