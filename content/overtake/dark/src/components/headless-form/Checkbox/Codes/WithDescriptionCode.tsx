import { Checkbox, Description, Field, Label } from "@headlessui/react";
import { useState } from "react";


const WithDescriptionCode = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
    <div className="mt-4">
      <Field className="flex gap-3">
          <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block ui-checkbox"
              >
                <svg
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"
                  viewBox="0 0 14 14"
                  fill="none"
                  height={15}
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
            <div>
              <Label>Enable beta features</Label>
              <Description>
                This will give you early access to new features we're
                developing.
              </Description>
            </div>
          </Field>
    </div>
    </>
  )
}

export default WithDescriptionCode
