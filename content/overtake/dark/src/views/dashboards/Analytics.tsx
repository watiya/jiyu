import Congratulations from "src/components/dashboards/analytics/Congratulations";
import Customer from "src/components/dashboards/analytics/Customer";
import LatestDeal from "src/components/dashboards/analytics/LatestDeal";
import LatestReview from "src/components/dashboards/analytics/LatestReview";
import Payments from "src/components/dashboards/analytics/Payments";
import PopularProducts from "src/components/dashboards/analytics/PopularProducts";
import Products from "src/components/dashboards/analytics/Products";
import UpcommingSchedule from "src/components/dashboards/analytics/UpcommingSchedule";
import VisitFromUsa from "src/components/dashboards/analytics/VisitFromUsa";


const Analytics = () => {
  return (
    <>
      <div className="grid grid-cols-12 lg:gap-y-30 lg:gap-x-30 gap-y-30 gap-x-0">
        <Congratulations />
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <LatestDeal />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Customer />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Payments />
        </div>
        <div className="lg:col-span-3 md:col-span-6 col-span-12">
          <Products />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <PopularProducts />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <UpcommingSchedule />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <LatestReview />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <VisitFromUsa />
        </div>
      </div>
    </>
  );
};

export default Analytics;
