


import { Sidebar } from "flowbite-react";
import FullLogo from "../../shared/logo/FullLogo";
import InnerSidebar from "./InnerSidebar";


const SidebarLayout = () => {

  return (
    <>
      <div className="xl:block hidden">
        <div className="flex">
          <Sidebar
            className="fixed menu-sidebar  bg-white dark:bg-darkgray rtl:pe-4"
            aria-label="Sidebar with multi-level dropdown example"
          >
            <div className="px-6 py-4 flex items-center brand-logo">
              <FullLogo />
            </div>
            <InnerSidebar/>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
