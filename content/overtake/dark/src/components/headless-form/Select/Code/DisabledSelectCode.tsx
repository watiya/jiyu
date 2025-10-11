import { Description, Field, Label, Select } from "@headlessui/react";

const DisabledSelectCode = () => {
    return (
        <>
        <div className="max-w-sm">
            <Field disabled>
          <Label className="text-ld mb-1 block data-disabled:opacity-50">
            Project status
          </Label>
          <Description className="mb-2 text-bodytext text-xs data-disabled:opacity-50">
            This will be visible to clients on the project.
          </Description>
          <Select
            name="status"
            aria-label="Project status"
            className="ui-form-control rounded-md data-disabled:opacity-50"
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


export default DisabledSelectCode;