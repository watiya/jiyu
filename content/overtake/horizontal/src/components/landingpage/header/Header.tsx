
import { useState, useEffect } from "react";
import "flowbite";
import {Button, Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import PagesMenu from "./Pagesmenu";
import DemosMenu from "./DemosMenu";
import MobileDrawer from "./MobileDrawer";
import FrontPageMenu from "./FrontPageMenu";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import { Link, useNavigate } from "react-router";

const Header = () => {
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

  const navigate = useNavigate();

  return (
    <>
      <header
        className={`top-0 z-50 ${
          isSticky
            ? "bg-white dark:bg-dark shadow-md fixed w-full"
            : "bg-white dark:bg-dark"
        }`}
      >
        <Navbar className="fluid py-6 px-0!">
          <FullLogo />
          <MobileDrawer/>
          <NavbarCollapse className="xl:block hidden">
            <DemosMenu />
            <FrontPageMenu/>
            <PagesMenu />
            <NavbarLink as={Link} className="hover:!text-primary" href="https://wrappixel.github.io/premium-documentation-wp/react/materialM/index.html">
              Documentation
            </NavbarLink>
            <NavbarLink as={Link} className="hover:!text-primary" href="https://support.wrappixel.com/">
              Support
            </NavbarLink>
            <NavbarLink
              as={Button}
              onClick={() => navigate("/auth/auth1/login")}
              className="!bg-primary !text-white text-sm hover:!text-white dark:hover:text-white hover:!bg-primaryemphasis !py-2 !px-5"
            >
              Login
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
