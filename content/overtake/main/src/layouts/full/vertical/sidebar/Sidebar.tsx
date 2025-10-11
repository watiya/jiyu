

import { IconSidebar } from "./IconSidebar";
import SideProfile from "./SideProfile/SideProfile";
import InnerSidebar from "./InnerSidebar";

const SidebarLayout = () => {

  return (
    <>
      <div className="xl:block hidden">
        <div className="minisidebar-icon border-e border-ld bg-white dark:bg-darkgray fixed start-0 z-1">
          <IconSidebar />
          <SideProfile />
        </div>
        <InnerSidebar/>
      </div>
    </>
  );
};

export default SidebarLayout;
