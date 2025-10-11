import {
  MegaMenu,
  Button,
  MegaMenuDropdown,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

import FullLogo from 'src/layouts/full/shared/logo/FullLogo';
import { Icon } from '@iconify/react/dist/iconify.js';

const MegamenuIconCode = () => {
  return (
    <>
      <div>
        <MegaMenu className="rounded-md">
          <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8">
            <FullLogo />
            <div className="order-2 hidden items-center md:flex">
              <a
                href="#"
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
              >
                Login
              </a>
              <Button href="#" color="primary">
                Sign up
              </Button>
            </div>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink
                href="#"
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"
              >
                Home
              </NavbarLink>
              <MegaMenuDropdown
                toggle={
                  <div className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary">
                    Company
                  </div>
                }
              >
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li className="flex items-center gap-2">
                      <Icon icon="cuida:alert-outline" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        About Us
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="mdi:blog" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Library
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:contact-round" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Resources
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="ri:stack-fill" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Pro Version
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li className="flex items-center gap-2">
                      <Icon icon="map:post-box" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Contact Us
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="lets-icons:setting-line" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Support Center
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="solar:box-linear" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Terms
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="solar:widget-2-broken" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Blog
                      </a>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li className="flex items-center gap-2">
                      <Icon icon="lucide:file-spreadsheet" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Newsletter
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="tdesign:rocket-filled" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        Playground
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon icon="carbon:license" height={16} />
                      <a href="#" className="hover:text-primary dark:hover:text-primary">
                        License
                      </a>
                    </li>
                  </div>
                </ul>
              </MegaMenuDropdown>
              <NavbarLink
                href="#"
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"
              >
                Team
              </NavbarLink>
            </NavbarCollapse>
          </div>
        </MegaMenu>
      </div>
    </>
  );
};

export default MegamenuIconCode;
