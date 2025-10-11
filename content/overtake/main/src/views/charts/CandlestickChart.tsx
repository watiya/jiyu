import ApexCandleStick from "src/components/charts/ApexCandleSticks";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Chart Apex Candlestick",
  },
];
const CandleStick = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Candlestick" items={BCrumb} />
      <ApexCandleStick />
    </>
  );
};

export default CandleStick;
