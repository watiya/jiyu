import ApexLineChart from "src/components/charts/ApexLineChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Line",
  },
];
const LineChart = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Line" items={BCrumb} />
      <ApexLineChart />
    </>
  );
};

export default LineChart;
