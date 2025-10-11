
import DefaultSelect from "src/components/shadcn-form/Select/DefaultSelect";
import ScrollableSelect from "src/components/shadcn-form/Select/ScrollableSelect";
import FormSelect from "src/components/shadcn-form/Select/FormSelect";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Select",
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Select" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <DefaultSelect />
        </div>
        <div className="col-span-12">
          <ScrollableSelect />
        </div>
        <div className="col-span-12">
          <FormSelect />
        </div>
      </div>
    </>
  );
};

export default page;
