
import BasicAccordion from "src/components/ui-components/Accordian/BasicAccordion";
import ComponentApi from "src/components/ui-components/ComponentApi";
import FlushAccordian from "src/components/ui-components/Accordian/FlushAccordion";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Accordion",
  },
];

    const allApis = [
        {
            id : "1",
            prop: "collapseAll",
            description: "Automatically collapses all accordion panels.",
            type: "boolean",
            default: `false`
        }
    ]

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Accordion" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <BasicAccordion />
        </div>
        {/* Flush */}
        <div className="col-span-12">
          <FlushAccordian />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Accordion" />
        </div>
      </div>
    </>
  );
};

export default page;
