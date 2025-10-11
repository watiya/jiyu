
import React, { useContext } from "react";
import { ChildItem } from "../Sidebaritems";
import { Button, SidebarItem } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { DashboardContext } from "src/context/DashboardContext/DashboardContext";

interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { t } = useTranslation();
  const {setIsMobileSidebarOpen} = useContext(DashboardContext);
  const handleMobileSidebar = () => {
       setIsMobileSidebarOpen(false)
  }
  return (
    <>
    <Link to={item.url} >
      <SidebarItem
        as={Button}
        className={`${
          item.url == pathname
            ? `text-primary ${item.icon ? 'bg-lightprimary dark:bg-lightprimary':'bg-transparent dark:bg-transparent'} rounded-full hover:text-primary hover:bg-lightprimary dark:hover:text-primary dark:text-primary active`
            : "text-link bg-transparent dark:bg-transparent group/link "
        } `}
      >
        <span onClick={handleMobileSidebar} className="flex gap-[13px] align-center items-center truncate">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color}`} height={18} />
          ) : (
            <span
              className={`${
                item.url == pathname
                  ? "dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary !bg-primary h-[6px] w-[6px]"
                  : "h-[6px] w-[6px] bg-black/40 dark:bg-white rounded-full mx-1.5 group-hover/link:bg-primary"
              } `}
            ></span>
          )}
          <span className="max-w-36 overflow-hidden hide-menu">
            {t(`${item.name}`)}
          </span>
        </span>
      </SidebarItem>
      </Link>
    </>
  );
};

export default NavItems;
