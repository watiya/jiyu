

import { MegaMenu, MegaMenuDropdown, MegaMenuDropdownToggle, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";
import { HiChevronDown,HiArrowRight } from "react-icons/hi";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
const FullWidthCTA = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">Full Width With CTA</h4>
        <MegaMenu className="rounded-md">
          <FullLogo />
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="/">Home</NavbarLink>
            <MegaMenuDropdownToggle>
              Company
              <HiChevronDown className="ml-2" />
            </MegaMenuDropdownToggle>
            <NavbarLink href="/">Marketplace</NavbarLink>
            <NavbarLink href="/">Resources</NavbarLink>
            <NavbarLink href="/">Contact</NavbarLink>
          </NavbarCollapse>
          <MegaMenuDropdown>
            <div className="mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
              <ul className="space-y-4 sm:mb-4 md:mb-0">
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
              <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
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
              <div className="mt-4 md:mt-0">
                <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Our brands
                </h2>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  At Flowbite, we have a portfolio of brands that cater to a
                  variety of preferences.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primaryemphasis dark:text-primary dark:hover:text-primaryemphasis"
                >
                  Explore our brands
                  <span className="sr-only">Explore our brands</span>
                  <HiArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </MegaMenuDropdown>
        </MegaMenu>
      </CardBox>
    </div>
  );
};

export default FullWidthCTA;
