import BasicLayout from "src/components/form-components/Form-Horizontal/BasicLayout";
import BasicWithIcon from "src/components/form-components/Form-Horizontal/BasicWithIcon";
import CollapsibalForm from "src/components/form-components/Form-Horizontal/CollapsibalForm";
import FormLableAlignment from "src/components/form-components/Form-Horizontal/FormLableAlignment";
import FormSeprator from "src/components/form-components/Form-Horizontal/FormSeprator";
import FormWithTabs from "src/components/form-components/Form-Horizontal/FormWithTabs";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Horizontal",
  },
];
const FormHorizontal = () => {
  return (
    <>
      <BreadcrumbComp title="Form Horizontal" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="col-span-12">
          <BasicLayout />
        </div>
        <div className="col-span-12">
          <BasicWithIcon />
        </div>
        <div className="col-span-12">
          <FormSeprator />
        </div>
        <div className="col-span-12">
          <FormLableAlignment />
        </div>
        <div className="col-span-12">
          <CollapsibalForm />
        </div>
        <div className="col-span-12">
          <FormWithTabs />
        </div>
      </div>
    </>
  );
};

export default FormHorizontal;
