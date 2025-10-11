import ApexGradientChart from "src/components/charts/ApexGradientChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Gradient",
  },
];
const GradientChart = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Gradient" items={BCrumb} />
      <ApexGradientChart />
    </>
  );
};

export default GradientChart;
