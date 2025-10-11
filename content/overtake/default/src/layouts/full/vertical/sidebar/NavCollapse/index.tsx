
import  { useEffect, useState } from "react";
import { ChildItem } from "../Sidebaritems";
import NavItems from "../NavItems";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { CustomCollapse } from "../CustomCollapse";
import React from "react";

interface NavCollapseProps {
  item: ChildItem;
}



const NavCollapse: React.FC<NavCollapseProps> = ({ item }: any) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Determine if any child matches the current path
  const activeDD = item.children.find((t: { url: string }) => t.url === pathname);
  

  const { t, i18n } = useTranslation();
  const [translatedLabel, setTranslatedLabel] = useState<string | null>(null);

  // Manage open/close state for the collapse
  const [isOpen, setIsOpen] = useState<boolean>(!!activeDD);

  useEffect(() => {
    const loadTranslation = async () => {
      const label = t(`${item.name}`);
      setTranslatedLabel(label);
    };
    loadTranslation();
  }, [i18n.language, item.name, t]);

  // Toggle the collapse
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CustomCollapse
      label={translatedLabel || `${item.name}`}
      open={isOpen}
      onClick={handleToggle}
      icon={item.icon} 
      className={
        Boolean(activeDD)
          ? "text-primary bg-lightprimary dark:text-primary dark:bg-lightprimary rounded-full hover:bg-lightprimary hover:text-primary"
          : "rounded-full dark:text-white/80 hover:text-primary hover:bg-lightprimary dark:hover:bg-lightprimary dark:hover:text-primary"
      }
    >
      {/* Render child items */}
      {item.children && (
        <div className="sidebar-dropdown">
          {item.children.map((child: any) => (
            <React.Fragment key={child.id}>
              {child.children ? (
                <NavCollapse item={child} /> // Recursive call for nested collapse
              ) : (
                <NavItems item={child} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </CustomCollapse>
  );
};

export default NavCollapse;
