
import  { useContext } from "react";
import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { IconSidebar } from "./IconSidebar";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import SimpleBar from "simplebar-react";
import { CustomizerContext } from "../../../../context/CustomizerContext";
import React from "react";

const MobileSidebar = () => {
  const { selectedIconId } = useContext(CustomizerContext) || {};
  const selectedContent = SidebarContent.find(
    (data) => data.id === selectedIconId
  );
  return (
    <>
      <div>
        <div className="minisidebar-icon border-e border-ld bg-white dark:bg-darkgray fixed start-0 z-1 ">
          <IconSidebar />
        </div>
        <Sidebar
          className="fixed menu-sidebar pt-8 bg-white dark:bg-darkgray ps-4 rtl:pe-4 rtl:ps-0"
          aria-label="Sidebar with multi-level dropdown example"
        >
          <SimpleBar className="h-[calc(100vh_-_85px)]">
            <SidebarItems className="pe-4 rtl:pe-0 rtl:ps-4">
              <SidebarItemGroup className="sidebar-nav hide-menu ">
                {selectedContent &&
                  selectedContent.items?.map((item, index) => (
                    <React.Fragment key={index}>
                      <h5 className="text-link dark:text-white font-semibold text-sm caption border-border dark:!border-darkborder">
                        {item.heading}
                      </h5>
                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                          {child.children ? (
                            <NavCollapse item={child} />
                          ) : (
                            <NavItems item={child} />
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
              </SidebarItemGroup>
            </SidebarItems>
          </SimpleBar>
        </Sidebar>
      </div>
    </>
  );
};

export default MobileSidebar;
