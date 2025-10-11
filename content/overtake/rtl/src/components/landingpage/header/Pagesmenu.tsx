
import * as AppsData from "src/layouts/full/vertical/header/Data";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";
import { Button, Dropdown } from "flowbite-react";
import { Link } from "react-router";
import Quicklinks from "src/layouts/full/vertical/header/Quicklinks";

const PagesMenu = () => {
  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className=" w-[900px]  rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <div className="relative">
            <span className="py-1.5 px-4 text-base text-ld hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
              Pages <IconChevronDown className="ms-1" size={15} />
            </span>
          </div>
        )}
      >
        <div className="grid grid-cols-12 w-full">
          <div className="lg:col-span-8 col-span-12 flex items-stretch lg:px-5 lg:pr-0 px-0 py-5">
            <div className="grid grid-cols-12 lg:gap-3 w-full">
              {AppsData.appsLink.map((links, index) => (
                <div
                  className="col-span-12 lg:col-span-6 flex items-stretch"
                  key={index}
                >
                  <ul>
                    <li>
                      <Link
                        to={links.href}
                        className="flex gap-3 items-center hover:text-primary group relative"
                      >
                        <span className="bg-lighthover dark:bg-darkgray  h-10 w-10 flex justify-center items-center rounded-full">
                          <img
                            src={links.avatar}
                            width={20}
                            height={20}
                            alt="materialm"
                          />
                        </span>
                        <div>
                          <h6 className="font-semibold text-sm text-ld group-hover:text-primary mb-1 ">
                            {links.title}
                          </h6>
                          <p className="text-xs text-link dark:text-darklink opacity-90 font-medium">
                            {links.subtext}
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
              <div className="col-span-12 md:col-span-12 border-t border-border dark:border-darkborder hidden lg:flex items-stretch pt-4 pr-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-dark dark:text-darklink">
                    <i className="ti ti-help text-lg "></i>
                    <Link
                      to={"/theme-pages/faq"}
                      className="text-sm font-semibold hover:text-primary ml-2 flex gap-2 items-center"
                    >
                      <IconHelp width={20} />
                      Frequently Asked Questions
                    </Link>
                  </div>
                  <Button color={"primary"}>Check</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12  flex items-strech">
            <Quicklinks />
          </div>
        </div>
      </Dropdown>

      {/* <div
        id="dropdownHoverPages"
        className="z-10 hidden bg-white dark:bg-dark dropdown w-[900px] left-0"
      >
      
      </div> */}
    </div>
  );
};

export default PagesMenu;
