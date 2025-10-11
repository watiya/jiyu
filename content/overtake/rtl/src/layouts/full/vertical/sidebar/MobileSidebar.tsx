

import { IconSidebar } from "./IconSidebar";
import InnerSidebar from "./InnerSidebar";

const MobileSidebar = () => {
  return (
    <>
      <div>
        <div className="minisidebar-icon border-e border-ld bg-white dark:bg-darkgray fixed start-0 z-1 ">
          <IconSidebar />
        </div>
        <InnerSidebar/>
      </div>
    </>
  );
};

export default MobileSidebar;
