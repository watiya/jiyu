import { Packages } from "src/components/front-pages/homepage/Packages";
import { PaymentOptions } from "src/components/front-pages/homepage/Payments";
import PurchaseTemp from "src/components/front-pages/homepage/PurchaseTemp";
import FrontEndBreadcrumb from "src/layouts/full/shared/breadcrumb/FrontBreadcrumb";


const PricingPage = () => {
    return (
        <>
        <FrontEndBreadcrumb title="Choose Your Plan" link="Pricing Page" />
         
        <Packages />
        <div className="sm:pb-14 pb-8">
          <PaymentOptions />
        </div>
        <PurchaseTemp />
      </>
    );
};

export default PricingPage;
