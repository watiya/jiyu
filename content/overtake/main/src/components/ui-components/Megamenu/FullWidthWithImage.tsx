

import CardBox from "src/components/shared/CardBox";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
import { MegaMenu, MegaMenuDropdown, MegaMenuDropdownToggle, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { HiChevronDown, HiArrowRight } from "react-icons/hi";
const FullWidthWithImage = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">Full width with image</h4>
        <MegaMenu className="rounded-md">
          <FullLogo />
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/">Company</NavbarLink>
            <MegaMenuDropdownToggle>
              Marketplace
              <HiChevronDown className="ml-2" />
            </MegaMenuDropdownToggle>
            <NavbarLink href="/">Resources</NavbarLink>
            <NavbarLink href="/">Contact</NavbarLink>
          </NavbarCollapse>
          <MegaMenuDropdown>
            <div className="mt-6 border-y border-border dark:border-darkborder bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800">
              <div className="mx-auto grid max-w-(--breakpoint-xl) px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                <ul
                  className="mb-4 hidden space-y-4 md:mb-0 md:block"
                  aria-labelledby="mega-menu-full-image-button"
                >
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Online Stores
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Segmentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Marketing CRM
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Online Stores
                    </a>
                  </li>
                </ul>
                <ul className="mb-4 space-y-4 md:mb-0">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      License
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary dark:hover:text-primary"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
                <a href="#" className="rounded-lg  p-8 text-left bg-cover bg-center bg-[url('/src/assets/images/backgrounds/login-bg.svg')]">
                  <div className="backdrop-blur-xs text-dark" >
                  <p className="mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white">
                    Preview the new Flowbite dashboard navigation.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-hidden focus:ring-4 focus:ring-gray-700"
                  >
                    Get started
                    <HiArrowRight className="ml-2" />
                  </button>
                  </div>
                </a>
              </div>
            </div>
          </MegaMenuDropdown>
        </MegaMenu>
      </CardBox>
    </div>
  );
};

export default FullWidthWithImage;
