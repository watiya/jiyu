
import BasicCombobox from "src/components/shadcn-ui/Combobox/BasicCombobox";
import PopoverCombobox from "src/components/shadcn-ui/Combobox/PopoverCombobox";
import DropdownCombobox from "src/components/shadcn-ui/Combobox/DropdownCombobox";
import FormCombo from "src/components/shadcn-ui/Combobox/FormCombo";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Combobox",
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Combobox" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicCombobox />
        </div>
        <div className="col-span-12">
          <PopoverCombobox />
        </div>
        <div className="col-span-12">
          <DropdownCombobox />
        </div>
        <div className="col-span-12">
          <FormCombo/>
        </div>
      </div>
    </>
  );
};

export default page;
