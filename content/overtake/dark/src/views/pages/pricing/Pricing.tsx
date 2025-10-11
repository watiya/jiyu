import PricingIndex from "src/components/theme-pages/pricing";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Pricing",
  },
];

const Pricing = () => {
  return (
    <>
      <BreadcrumbComp title="Pricing" items={BCrumb} />
      <PricingIndex />
    </>
  );
};

export default Pricing;
