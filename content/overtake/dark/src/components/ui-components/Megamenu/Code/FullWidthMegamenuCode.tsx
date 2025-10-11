import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { HiChevronDown } from 'react-icons/hi';
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';

const FullWidthMegamenuCode = () => {
  return (
    <>
      <div>
        <MegaMenu className="rounded-md">
          <FullLogo />
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink>
              <MegaMenuDropdownToggle>
                Company
                <HiChevronDown className="ml-2" />
              </MegaMenuDropdownToggle>
            </NavbarLink>
            <NavbarLink href="/">Marketplace</NavbarLink>
            <NavbarLink href="/">Resources</NavbarLink>
            <NavbarLink href="/">Contact</NavbarLink>
          </NavbarCollapse>
          <MegaMenuDropdown>
            <ul className="mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6">
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Online Stores</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Segmentation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing CRM</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Audience Management</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Creative Tools</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="font-semibold">Marketing Automation</div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
            </ul>
          </MegaMenuDropdown>
        </MegaMenu>
      </div>
    </>
  );
};

export default FullWidthMegamenuCode;
