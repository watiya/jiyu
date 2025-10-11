

import React, { useContext, useEffect } from "react";
import { Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";
import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
// @ts-ignore
import SimpleBar from "simplebar-react";
import { CustomizerContext } from "src/context/CustomizerContext";
import { useLocation } from "react-router";

const InnerSidebar = () => {
  const { selectedIconId, setSelectedIconId } = useContext(CustomizerContext) || {};
  const selectedContent = SidebarContent.find(
    (data) => data.id === selectedIconId
  );

   const location = useLocation();
  const pathname = location.pathname;

  function findActiveUrl(narray: any, targetUrl: any) {
    for (const item of narray) {
      // Check if the `items` array exists in the top-level object
      if (item.items) {
        // Iterate through each item in the `items` array
        for (const section of item.items) {
          // Check if `children` array exists and search through it
          if (section.children) {
            for (const child of section.children) {
              if (child.url === targetUrl) {
                return item.id; // Return the ID of the first-level object
              }
            }
          }
        }
      }
    }
    return null; // URL not found
  }

  useEffect(() => {
    const result = findActiveUrl(SidebarContent, pathname);
    if (result) {
      setSelectedIconId(result);
    }
  }, [pathname, setSelectedIconId]);

  return (
    <>
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
    </>
  );
};

export default InnerSidebar;
