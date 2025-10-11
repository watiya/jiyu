import Archivement from "src/components/front-pages/aboutus/Archivement";
import HeroText from "src/components/front-pages/aboutus/HeroText";
import SetupProcess from "src/components/front-pages/aboutus/SetupProcess";
import ClientReviews from "src/components/front-pages/homepage/ClientReviews";
import Companies from "src/components/front-pages/homepage/Companies";
import { FAQ } from "src/components/front-pages/homepage/FAQ";
import { Highlights } from "src/components/front-pages/homepage/Highlights";
import OurTeam from "src/components/front-pages/homepage/OurTeam";
import { Packages } from "src/components/front-pages/homepage/Packages";
import { PaymentOptions } from "src/components/front-pages/homepage/Payments";
import PurchaseTemp from "src/components/front-pages/homepage/PurchaseTemp";


const About = () => {
  return (
    <>
      <HeroText />
      <SetupProcess />
      <Archivement />
      <OurTeam />
      <ClientReviews />
      <Companies />
      <Highlights />
      <Packages />
      <PaymentOptions />
      <FAQ />
      <PurchaseTemp />
    </>
  );
};

export default About;
