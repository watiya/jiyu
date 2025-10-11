import { useState } from 'react';
import { Popover, Label, TextInput, Button } from 'flowbite-react';
import { BiCaretDown } from 'react-icons/bi';

const ControlledPopoverCode = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Popover
          aria-labelledby="area-popover"
          open={open}
          onOpenChange={setOpen}
          content={
            <div className="flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400 ">
              <div>
                <h2 id="area-popover" className="text-base text-gray-500">
                  Area (sqft)
                </h2>
                <div className="mb-2 block">
                  <Label htmlFor="minsqft">Minimum sqft</Label>
                </div>
                <TextInput id="minsqft" type="number" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="maxsqft">Maximum sqft</Label>
                </div>
                <TextInput id="maxsqft" type="number" />
              </div>
              <div className="flex gap-2">
                <Button color="gray">Reset</Button>
                <Button color="primary" onClick={() => setOpen(false)}>
                  Save
                </Button>
              </div>
            </div>
          }
        >
          <Button color="primary">
            Area <BiCaretDown className="ml-2" />
          </Button>
        </Popover>
      </div>
    </>
  );
};

export default ControlledPopoverCode;
