import { Icon } from "@iconify/react";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import * as profileData from "./Data";
import SimpleBar from "simplebar-react";
import user1 from "/src/assets//images/profile/user-1.jpg"
import { Link } from "react-router";

const Profile = () => {
  return (
    <div className="relative group/menu">
      <Dropdown
        label=""
        className="w-screen sm:w-[360px] py-6  rounded-sm"
        dismissOnClick={false}
        renderTrigger={() => (
          <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
            <img
              src={user1}
              alt="logo"
              height="35"
              width="35"
              className="rounded-full"
            />
          </span>
        )}
      >
        <div className="px-6">
          <h3 className="text-lg font-semibold text-ld">User Profile</h3>
          <div className="flex items-center gap-6 pb-5 border-b border-border dark:border-darkborder mt-5 mb-3">
            <img
              src={user1}
              alt="logo"
              height="80"
              width="80"
              className="rounded-full"
            />
            <div>
              <h5 className="card-title">Jonathan Deo</h5>
              <span className="card-subtitle">Admin</span>
              <p className="card-subtitle mb-0 mt-1 flex items-center">
                <Icon
                  icon="solar:mailbox-line-duotone"
                  className="text-base me-1"
                />
                info@Materialm.com
              </p>
            </div>
          </div>
        </div>
        <SimpleBar>
        {profileData.profileDD.map((items, index) => (
          <DropdownItem
            as={Link}
            to="#"
            className="px-6 py-3 flex justify-between items-center bg-hover group/link w-full"
            key={index}
          >
            <div className="flex items-center w-full">
              <div
                className={`h-11 w-11 shrink-0 rounded-md flex justify-center items-center ${items.bgcolor}`}
              >
                <Icon icon={items.icon} height={20} className={items.color} />
              </div>
              <div className="ps-4 flex justify-between w-full">
                <div className="w-3/4 ">
                  <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                    {items.title}
                  </h5>
                  <div className="text-xs  text-darklink">{items.subtitle}</div>
                </div>
              </div>
            </div>
          </DropdownItem>
        ))}
        </SimpleBar>

        <div className="pt-6 px-6">
          <Button
            color={"primary"}
            as={Link}
            to="/auth/auth1/login"
            className="w-full"
          >
            Logout
          </Button>
        </div>
      </Dropdown>
    </div>
  );
};

export default Profile;
