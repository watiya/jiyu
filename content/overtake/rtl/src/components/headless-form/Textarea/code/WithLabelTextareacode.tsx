import { Field, Label, Textarea } from "@headlessui/react";


const WithLabelTextarea = () => {
    return (
        <>
        <div>
            <Field>
          <Label className="text-ld mb-2 block font-medium">Description</Label>
          <Textarea
            name="description"
            className="ui-form-control rounded-md"
            rows={4}
          ></Textarea>
        </Field>
        </div>
        </>
    )
}

export default WithLabelTextarea;