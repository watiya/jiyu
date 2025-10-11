

import { Sidebar } from "flowbite-react";
import FullLogo from "../../shared/logo/FullLogo";
import InnerSidebar from "./InnerSidebar";


const MobileSidebar = () => {

  return (
    <>
      <div className="flex">
        <Sidebar
          className="fixed menu-sidebar pt-6 bg-white dark:bg-darkgray z-[10]"
          aria-label="Sidebar with multi-level dropdown example"
        >
          <div className="mb-7 px-4 brand-logo">
            <FullLogo />
          </div>
         <InnerSidebar/>
        </Sidebar>
      </div>
    </>
  );
};

export default MobileSidebar;
