import ApexColumnChart from "src/components/charts/ApexColumnChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Column",
  },
];
const ColumnChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Column" items={BCrumb} />
      <ApexColumnChart/>
    </>
  );
};

export default ColumnChart;
