import CrmMarketingReport from "src/components/dashboards/crm/CrmMareketingReport";
import CurrentBalance from "src/components/dashboards/crm/CurrentBalance";
import DeliveryAnalytics from "src/components/dashboards/crm/DeliveryAnalytics";
import EarningReports from "src/components/dashboards/crm/EarningReports";
import OverallBalance from "src/components/dashboards/crm/OverallBalance";
import PaymentMethods from "src/components/dashboards/crm/PaymentMethods";
import RecentProjects from "src/components/dashboards/crm/RecentProjects";
import ReturnOnInvest from "src/components/dashboards/crm/ReturnOnInvest";
import TotalFollowers from "src/components/dashboards/crm/TotalFollowers";
import TotalIncome from "src/components/dashboards/crm/TotalIncome";


const Crm = () => {
  return (
    <>
      <div className="grid grid-cols-12 lg:gap-y-30 lg:gap-x-30 gap-y-30 gap-x-0">
        <div className="lg:col-span-8 col-span-12">
          <OverallBalance />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <ReturnOnInvest />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <TotalFollowers />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <TotalIncome />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <CurrentBalance />
        </div>
        <div className="lg:col-span-5 col-span-12">
          <CrmMarketingReport />
        </div>
        <div className="lg:col-span-7 col-span-12 flex">
          <PaymentMethods />
        </div>
        <div className="col-span-12">
          <RecentProjects />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <DeliveryAnalytics />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <EarningReports />
        </div>
      </div>
    </>
  );
};
export default Crm;
