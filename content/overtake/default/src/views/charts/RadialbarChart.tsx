import ApexRadialChart from "src/components/charts/ApexRadialBarChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Radialbar",
  },
];
const RadialChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Radialbar" items={BCrumb} />
      <ApexRadialChart/>
    </>
  );
};

export default RadialChart;
