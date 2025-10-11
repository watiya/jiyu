import ClientReviews from "src/components/front-pages/homepage/ClientReviews";
import Companies from "src/components/front-pages/homepage/Companies";
import ContactBar from "src/components/front-pages/homepage/ContactBar";
import { FAQ } from "src/components/front-pages/homepage/FAQ";
import FeatureTabs from "src/components/front-pages/homepage/FeatureTabs";
import { Highlights } from "src/components/front-pages/homepage/Highlights";
import MainBanner from "src/components/front-pages/homepage/MainBanner";
import OurClients from "src/components/front-pages/homepage/OurClients";
import OurTeam from "src/components/front-pages/homepage/OurTeam";
import { Packages } from "src/components/front-pages/homepage/Packages";
import { PaymentOptions } from "src/components/front-pages/homepage/Payments";
import PurchaseTemp from "src/components/front-pages/homepage/PurchaseTemp";


const HomePage = () => {
  return (
    <>
      <MainBanner />
      <OurClients />
      <FeatureTabs />
      <OurTeam />
      <ContactBar />
      <ClientReviews />
      <Companies />
      <Highlights />
      <Packages />
      <PaymentOptions />
      <FAQ/>
      <PurchaseTemp/>
    </>
  );
};

export default HomePage;
