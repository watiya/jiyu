import ApexAreaChart from "src/components/charts/ApexAreaChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Area",
  },
];
const AreaChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Area" items={BCrumb} />
      <ApexAreaChart/>
    </>
  );
};

export default AreaChart;
