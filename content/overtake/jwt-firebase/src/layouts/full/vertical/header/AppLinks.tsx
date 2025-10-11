
import { Icon } from "@iconify/react";
import * as AppsData from "./Data";
import Quicklinks from "./Quicklinks";
import { IconHelp } from "@tabler/icons-react";
import { Button } from "flowbite-react";
import SimpleBar from "simplebar-react";
import { Link } from "react-router";
import { useContext } from "react";
import { DashboardContext } from "src/context/DashboardContext/DashboardContext";

const AppLinks = () => {

  const {setIsApplinkDrawerOpen} = useContext(DashboardContext);

  return (
    <>
      <div className="relative group ">
        <span className="h-10 w-10 hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer group-hover:bg-lightprimary group-hover:text-primary xl:flex hidden">
          <Icon icon="solar:widget-3-line-duotone" height={20} />
        </span>

        <span
          className="xl:hidden  h-10 w-10 hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover:bg-lightprimary group-hover:text-primary "
          onClick={() => setIsApplinkDrawerOpen(true) }
        >
          <Icon icon="solar:widget-3-line-duotone" height={20} />
        </span>

        <div className="sm:w-[900px] w-screen dropdown dark:bg-dark invisible  group-hover:visible absolute">
        <SimpleBar className="md:h-auto h-[calc(100vh_-_50px)]">
              <div className="grid grid-cols-12 w-full">
                <div className="xl:col-span-8 col-span-12 flex items-stretch xl:pe-0 xl:rtl:pe-0 xl:px-5 px-5 py-5">
                  <div className="grid grid-cols-12 gap-3 w-full">
                    {AppsData.appsLink.map((links, index) => (
                      <div
                        className="col-span-12 xl:col-span-6 flex items-stretch"
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
                                <h6 className="font-semibold text-sm text-ld hover:text-primary mb-1 ">
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
                    <div className="col-span-12 md:col-span-12 border-t border-border dark:border-darkborder hidden xl:flex items-stretch pt-4 pr-4">
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
                        <Button color={"primary"} as={Link} to="/" >Check</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-4 col-span-12  flex items-strech">
                  <Quicklinks />
                </div>
              </div>
            </SimpleBar>
        </div>
      </div>
    </>
  );
};

export default AppLinks;
