// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useState, useEffect, useContext } from "react";
import { Icon } from "@iconify/react";
import Miniicons from "./MiniSidebar";
// @ts-ignore
import SimpleBar from "simplebar-react"; 
import { Button, Tooltip } from "flowbite-react";
import { CustomizerContext } from "src/context/CustomizerContext";
import Logo from "../../shared/logo/Logo";

export const IconSidebar = () => {
  const { selectedIconId, setSelectedIconId, setIsCollapse } = useContext(CustomizerContext) || {};
  // Handle icon click
  const handleClick = (id: any) => {
    setSelectedIconId(id);
    setIsCollapse("full-sidebar");
  };

  return (
    <>
      <div className="px-4 py-6 pt-7 logo">
        <Logo />
      </div>
      <SimpleBar className="miniicons relative">
        {Miniicons.map((links, index) => (
          <Tooltip key={index} content={links.tooltip} placement="right" className="flowbite-tooltip" >
            <Button
              key={index}
              className={`h-12 w-12 hover:text-primary text-darklink hover:bg-lightprimary dark:hover:bg-lightprimary rounded-full flex justify-center items-center mx-auto mb-2 ${links.id === selectedIconId ? "text-primary dark:text-primary bg-lightprimary dark:bg-lightprimary" : "text-darklink bg-transparent dark:bg-transparent"
                }`}
              type="button"
              onClick={() => handleClick(links.id)}
            >
              <Icon icon={links.icon} height={24} className="dark:bg-blue shrink-0" />
            </Button>
          </Tooltip>
        ))}
      </SimpleBar>
    </>
  );
};



