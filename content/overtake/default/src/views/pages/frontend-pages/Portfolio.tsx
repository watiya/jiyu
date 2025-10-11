import PurchaseTemp from "src/components/front-pages/homepage/PurchaseTemp";
import GalleryPortfolio from "src/components/front-pages/portfolio/GalleryPortfolio";
import FrontEndBreadcrumb from "src/layouts/full/shared/breadcrumb/FrontBreadcrumb";


const PricingPage = () => {
  return (
    <>
      <FrontEndBreadcrumb title="Explore Our Latest Works" link="Portfolio" />
      <GalleryPortfolio />
      <PurchaseTemp />
    </>
  );
};

export default PricingPage;
