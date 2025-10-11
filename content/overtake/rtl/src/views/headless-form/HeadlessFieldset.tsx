import DisableFieldset from "src/components/headless-form/Fieldset/DisableFieldset";
import MainFieldset from "src/components/headless-form/Fieldset/MainFieldset";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Fieldset",
    },
  ];

const HeadlessFieldset = () => {
  return (
    <>
      <BreadcrumbComp title="Fieldset" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <MainFieldset />
        </div>
        <div className="col-span-12">
          <DisableFieldset />
        </div>
      </div>
    </>
  )
}

export default HeadlessFieldset