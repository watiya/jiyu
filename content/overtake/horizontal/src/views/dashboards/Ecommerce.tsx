

import AnnualProfit from "src/components/dashboards/ecommerce/AnnualProfit";
import MarketingReport from "src/components/dashboards/ecommerce/MarketingReport";
import Payments from "src/components/dashboards/ecommerce/Payments";
import ProductSales from "src/components/dashboards/ecommerce/ProductSales";
import RecentTransaction from "src/components/dashboards/ecommerce/RecentTransaction";
import SalesProfit from "src/components/dashboards/ecommerce/SalesProfit";
import SmallCards from "src/components/dashboards/ecommerce/smallCards";
import TopProducts from "src/components/dashboards/ecommerce/TopProducts";
import Welcome from "src/components/dashboards/ecommerce/Welcome";




const Ecommerce = () => {

  return (
    <>
      <div className="grid grid-cols-12 lg:gap-y-30 lg:gap-x-30 gap-y-30 gap-x-0">
        <div className="lg:col-span-6  col-span-12">
          <Welcome />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <SmallCards />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <SalesProfit />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <ProductSales />
        </div>
        <div className="lg:col-span-5 col-span-12">
          <MarketingReport />
        </div>
        <div className="lg:col-span-3 col-span-12">
          <Payments />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <AnnualProfit />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <TopProducts />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RecentTransaction />
        </div>
      </div>
     
    </>
  );
};

export default Ecommerce;
