
import CurrentValue from "src/components/widgets/charts/CurrentValue";
import Customers from "src/components/widgets/charts/Customers";
import EarnedChart from "src/components/widgets/charts/EarnedChart";
import FollowersChart from "src/components/widgets/charts/FollowersChart";
import MonthlyEarning from "src/components/widgets/charts/MonthlyEarcning";
import MostVisited from "src/components/widgets/charts/MostVisited";
import PageImpression from "src/components/widgets/charts/PageImpression";
import Projects from "src/components/widgets/charts/Projects";
import RevenueUpdates from "src/components/widgets/charts/RevenueUpdates";
import SalesOverview from "src/components/widgets/charts/SalesOverview";
import TotalEarningChart from "src/components/widgets/charts/TotalEarnigs";
import ViewsChart from "src/components/widgets/charts/ViewsChart";
import YarlyBreakup from "src/components/widgets/charts/YarlyBreakup";
import YearlySales from "src/components/widgets/charts/YearlySales";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Charts',
  },
];

const WidgetCharts = () => {
  return (
    <>
      <BreadcrumbComp title="Charts" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <FollowersChart />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <ViewsChart />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <EarnedChart />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <TotalEarningChart />
        </div>
        <div className="col-span-12">
          <CurrentValue />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <YarlyBreakup />
          <MonthlyEarning />
          <MostVisited />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <YearlySales />
          <PageImpression />
          <div className="grid grid-cols-12 xl:gap-[30px] mt-[30px]">
            <div className="xl:col-span-6 col-span-12">
              <Customers />
            </div>
            <div className="xl:col-span-6 col-span-12 xl:mt-0 mt-[30px]">
              <Projects />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
         <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
          <RevenueUpdates />
          <SalesOverview />
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default WidgetCharts;
