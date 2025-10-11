
import { useEffect } from "react";
import { ThemeProvider } from "flowbite-react";
import LpHeader from "src/components/landingpage/header/Header";
import LpBanners from "src/components/landingpage/banner/banner";
import customTheme from "src/utils/theme/custom-theme";
import AllFeatures from "./features/AllFeatures";
import ProductDemos from "./productdemos/demos";
import ClientReviews from "./reviews/ClientReviews";
import Ticket from "./ticket/Ticket";

import AOS from "aos";
import 'aos/dist/aos.css';
import Footer from "./footer/Footer";

const Landingpage = () => {
  useEffect(() => { 
    AOS.init();
  }, []);
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <div className="landingpage overflow-x-hidden">
          <LpHeader />
          <LpBanners />
          <ProductDemos />
          <AllFeatures />
          <ClientReviews />
          <Ticket />
          <Footer />
        </div>
    </ThemeProvider>
    </>
  );
};

export default Landingpage;
