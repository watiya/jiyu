import { twMerge } from "tailwind-merge";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const CustomCollapse: React.FC<{
  label: string;
  open: boolean;
  children: any;
  onClick: () => void;
  icon: string;
  className?: string;
}> = ({ label, open, onClick, icon, children, className }) => {
  return (
    <div className={twMerge("transition-all duration-300 ease-in-out", className)}>
      <div
        className={twMerge(
          `flex cursor-pointer mb-1 items-center justify-between rounded-full px-4 py-[11px] gap-3 text-sm font-normal text-link hover:text-primary dark:text-white hover:bg-lightprimary dark:hover:bg-lightprimary dark:hover:text-primary ${open?'bg-lightprimary text-primary dark:text-primary':null}`
        )}
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          <Icon icon={icon} height={18} />
          <span className="truncate max-w-[7rem]">{label}</span>
        </div>
        <HiOutlineChevronDown
          className={twMerge(
            "transition-transform duration-300 ease-in-out",
            open ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      <div
        className={twMerge(
          "grid transition-all duration-300 ease-in-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export { CustomCollapse };
