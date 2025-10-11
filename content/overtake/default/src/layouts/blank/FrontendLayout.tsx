import AnnouncementBar from "src/components/front-pages/layout/AnnouncementBar";
import { Footer } from "src/components/front-pages/layout/Footer";
import FrontHeader from "src/components/front-pages/layout/Header";
import customTheme from "src/utils/theme/custom-theme";
import { ThemeProvider } from "flowbite-react";
import { Outlet } from "react-router";
import ScrollToTop from "src/components/shared/ScrollToTop";
import { useContext, useEffect } from "react";
import { CustomizerContext } from "src/context/CustomizerContext";


const FrontendLayout = () => {
    const {activeMode} = useContext(CustomizerContext); 
    useEffect(() => {
        document.documentElement.setAttribute("class",`${activeMode}`)
    },[])
    return (
        <>
        <div className="frontend-page bg-white dark:bg-dark">
        <ThemeProvider theme={customTheme}>
            <AnnouncementBar />
            <FrontHeader />
            <ScrollToTop>
            <Outlet />
            </ScrollToTop>
            <Footer />
              </ThemeProvider>
        
            </div>
        </>
    )
};

export default FrontendLayout;
