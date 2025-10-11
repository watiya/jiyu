import { Textarea } from "@headlessui/react";

const BasicTextareacode = () => {
    return (
        <>
        <div>
            <Textarea
          name="description"
          className="ui-form-control rounded-md"
          rows={6}
        ></Textarea>
        </div>
        </>
    )

}
export default BasicTextareacode;