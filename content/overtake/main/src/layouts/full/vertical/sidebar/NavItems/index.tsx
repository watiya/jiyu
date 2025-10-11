import React, { useContext } from "react";

import { ChildItem } from "../Sidebaritems";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { DashboardContext } from "src/context/DashboardContext/DashboardContext";
import { Button, SidebarItem } from "flowbite-react";



interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { t } = useTranslation();

  const {setIsMobileSidebarOpen}  = useContext(DashboardContext);
  return (
    <Link to={item.url} >
      <SidebarItem
        as={Button}
        onClick = {() => setIsMobileSidebarOpen(false)}
        className={`w-full ${
          item.url == pathname
            ? `text-primary dark:text-primary  rounded-full active ${item.icon ? 'bg-lightprimary dark:bg-lightprimary' : 'bg-transparent dark:bg-transparent'}`
            : "text-link bg-transparent group/link dark:bg-transparent"
        } `}
      >
        <span className="flex gap-3 align-center items-center">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
            <span
              className={`${
                item.url == pathname
                  ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary bg-primary! h-[6px] w-[6px]"
                  : "h-[6px] w-[6px] bg-black/40 dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
              } `}
            ></span>
          )}
          <span
            className={`max-w-36 overflow-hidden`}
          >
            {t(`${item.name}`)}
          </span>
        </span> 
      </SidebarItem>
    </Link>
  );
};

export default NavItems;
