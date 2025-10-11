
import DefaultRadio from "src/components/shadcn-form/Radio/DefaultRadio";
import FormRadio from "src/components/shadcn-form/Radio/FormRadio";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Radio",
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Radio" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <DefaultRadio />
        </div>
        <div className="col-span-12">
          <FormRadio />
        </div>
      </div>
    </>
  );
};

export default page;
