import CheckBoxValidation from "src/components/form-components/Form-Validation/CheckBoxValidation";
import InputValidationOne from "src/components/form-components/Form-Validation/InputValidationOne";
import InputValidationTwo from "src/components/form-components/Form-Validation/InputValidationTwo";
import OnLeaveValidation from "src/components/form-components/Form-Validation/OnLeaveValidation";
import RadioValidation from "src/components/form-components/Form-Validation/RadioValidation";
import SelectValidation from "src/components/form-components/Form-Validation/SelectValidation";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Validation",
  },
];
const FormValidation = () => {
  return (
    <>
      <BreadcrumbComp title="Form Validation" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="lg:col-span-6 col-span-12">
          <InputValidationOne />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <InputValidationTwo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <OnLeaveValidation />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <SelectValidation />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <RadioValidation />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <CheckBoxValidation />
        </div>
      </div>
    </>
  );
};

export default FormValidation;
