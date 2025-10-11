
import { useState, useEffect } from "react";
import "flowbite";
import { Button } from "flowbite-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import { Link } from "react-router";

const FrontHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={` top-0 z-50 ${
          isSticky
            ? "bg-white dark:bg-dark shadow-md fixed w-full py-5"
            : "bg-lightgray dark:bg-darkgray lg:py-9 py-5 "
        }`}
      >
       
        <div className="container-1218 mx-auto  flex justify-between items-center">
          <FullLogo />
          {/* <MobileDrawer/> */}
          <div className="xl:block hidden">
            <Navigation />
          </div>
          <Button as={Link} to="/auth/auth1/login" className="font-bold xl:flex hidden bg-primary hover:bg-primaryemphasis text-white" color={"sky"}>
            Log in
          </Button>
          <MobileMenu/>
        </div>
      </header>
    </>
  );
};

export default FrontHeader;
