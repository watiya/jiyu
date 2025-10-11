
import CheckboxWithLable from "src/components/shadcn-form/Checkbox/CheckboxWithLable";
import DefaultChecked from "src/components/shadcn-form/Checkbox/DefaultChecked";
import DisabledCehckboxes from "src/components/shadcn-form/Checkbox/DisabledCehckboxes";
import FormCheckbox from "src/components/shadcn-form/Checkbox/FormCheckbox";
import CheckboxWithText from "src/components/shadcn-form/Checkbox/CheckboxWithText";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Checkbox",
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Checkbox" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <CheckboxWithLable />
        </div>
        <div className="col-span-12">
          <DefaultChecked />
        </div>
        <div className="col-span-12">
          <DisabledCehckboxes />
        </div>
        <div className="col-span-12">
          <FormCheckbox />
        </div>
        <div className="col-span-12">
          <CheckboxWithText />
        </div>
      </div>
    </>
  );
};

export default page;
