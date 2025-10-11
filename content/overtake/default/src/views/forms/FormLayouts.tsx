
import BasicHeaderForm from "src/components/form-components/Form-Layouts/BasicHeaderForm";
import DefaultForm from "src/components/form-components/Form-Layouts/DefaultForm";
import DisableForm from "src/components/form-components/Form-Layouts/DisableForm";
import FormWithLeftIcon from "src/components/form-components/Form-Layouts/FormWithLeftIcon";
import FormWithRightIcon from "src/components/form-components/Form-Layouts/FormWithRightIcon";
import InputVariants from "src/components/form-components/Form-Layouts/InputVariants";
import OrdinaryForm from "src/components/form-components/Form-Layouts/OrdinaryForm";
import ReadOnlyForm from "src/components/form-components/Form-Layouts/ReadOnlyForm";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Layout",
  },
];
const FormLayouts = () => {
  return (
    <>
      <BreadcrumbComp title="Form Layout" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="col-span-12">
          <OrdinaryForm />
        </div>
        <div className="col-span-12">
          <InputVariants />
        </div>
        <div className="col-span-12">
          <DefaultForm />
        </div>
        <div className="col-span-12">
          <BasicHeaderForm />
        </div>
        <div className="col-span-12">
          <ReadOnlyForm />
        </div>
        <div className="col-span-12">
          <DisableForm />
        </div>
        <div className="lg:sm:col-span-6 col-span-12">
          <FormWithLeftIcon />
        </div>
        <div className="lg:sm:col-span-6 col-span-12">
          <FormWithRightIcon />
        </div>
      </div>
    </>
  );
};

export default FormLayouts;
