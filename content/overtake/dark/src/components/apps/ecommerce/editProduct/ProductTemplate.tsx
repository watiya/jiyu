
import CardBox from "src/components/shared/CardBox";
import { Label, Select } from "flowbite-react";



const Producttemplate = () => {
  return (
    <>
      <CardBox>
        <h5 className="card-title mb-4">Product Template</h5>
        <div className="">
          <div className="mb-2 block">
            <Label htmlFor="temp">Select a product template</Label>
            <span className="text-error ms-1">*</span>
          </div>
          <Select id="temp" className="select-md" defaultValue={'Fashion'} required>
            <option>Fashion</option>
            <option>Default Template</option>
            <option>Office Stationary</option>
            <option>Electronics</option>
          </Select>
          <small className="text-xs text-darklink dark:text-bodytext">
            Assign a template from your current theme to define how a single
            product is displayed.
          </small>
        </div>
      </CardBox>
    </>
  );
};

export default Producttemplate;
