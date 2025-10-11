import { Field, Label, Select } from "@headlessui/react";

const WithLabelSelectCode = () => {
    return (
        <>
        <div className="max-w-sm">
        <Field>
                  <Label className="text-ld mb-2 block">Project status</Label>
                  <Select
                    name="status"
                    aria-label="Project status"
                    className="ui-form-control rounded-md"
                  >
                    <option value="active">Active</option>
                    <option value="paused">Paused</option>
                    <option value="delayed">Delayed</option>
                    <option value="canceled">Canceled</option>
                  </Select>
                </Field>
        </div>
        </>
    )
}

export default WithLabelSelectCode;