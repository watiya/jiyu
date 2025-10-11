import { Description, Field, Label, Select } from "@headlessui/react";
const WithDescriptionSelectCode = () => {
    return (
        <>
        <div className="max-w-sm">
            <Field>
          <Label className="text-ld mb-1 block">Project status</Label>
          <Description className="mb-2 text-bodytext text-xs">This will be visible to clients on the project.</Description>
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

export default WithDescriptionSelectCode