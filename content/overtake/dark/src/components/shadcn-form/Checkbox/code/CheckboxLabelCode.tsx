import { Checkbox } from "src/components/shadcn-ui/Default-Ui/checkbox";


const CheckboxLabelCode = () => {
  return (
    <>
      <div className="flex flex-col gap-3 m-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-ld">
            Accept terms and conditions
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="privacy" />
          <label htmlFor="privacy" className="text-ld">
            Accept privacy policy
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="continue" />
          <label htmlFor="continue" className="text-ld">
             Continue to process?
          </label>
        </div>
      </div>
    </>
  )
}

export default CheckboxLabelCode