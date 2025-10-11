
import FormWithTabs from "src/components/form-components/Form-Horizontal/FormWithTabs";
import BasicLayout from "src/components/form-components/Form-Vertical/BasicLayout";
import BasicWithIcon from "src/components/form-components/Form-Vertical/BasicWithIcon";
import CollapsibleSection from "src/components/form-components/Form-Vertical/CollapsibleSection";
import MulticolFormSeprator from "src/components/form-components/Form-Vertical/MulticolFormSeprator";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Vertical",
  },
];

const FormVertical = () => {
  return (
    <>
      <BreadcrumbComp title="Form Vertical" items={BCrumb} />
      <div className="grid grid-cols-12 gap-30">
        <div className="lg:col-span-6 col-span-12">
          <BasicLayout />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <BasicWithIcon />
        </div>
        <div className="col-span-12">
          <MulticolFormSeprator />
        </div>
        <div className="col-span-12">
          <CollapsibleSection/>
        </div>
        <div className="col-span-12">
          <FormWithTabs/>
        </div>
      </div>
    </>
  );
};

export default FormVertical;
