import ApexDoughnutChart from "src/components/charts/ApexDoughnutChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Doughtnut",
  },
];
const DoughnutChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Doughtnut" items={BCrumb} />
      <ApexDoughnutChart/>
    </>
  );
};

export default DoughnutChart;
