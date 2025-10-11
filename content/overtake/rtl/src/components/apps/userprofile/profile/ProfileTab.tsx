
// import { Icon } from "@iconify/react";
// import React from "react";
import {  useLocation, useNavigate } from "react-router";
import {
  TbUserCircle,
  TbHeart,
  TbUsers,
 TbPhotoPlus
} from "react-icons/tb";

// const MemoizedIcon = React.memo(Icon);
const ProfileTab = () => {
  const path = useLocation(); 
  const location = path.pathname;

  const navigate = useNavigate();
  const ProfileTabs = [
    {
      label: "Profile",
      icon: TbUserCircle,
      to: "/apps/user-profile/profile",
    },
    {
      label: "Followers",
      icon: TbHeart,
      to: "/apps/user-profile/followers",
    },
    {
      label: "Friends",
      icon: TbUsers,
      to: "/apps/user-profile/friends",
    },
    {
      label: "Gallery",
      icon: TbPhotoPlus,
      to: "/apps/user-profile/gallery",
    },
  ];

  const IconWrapper = ({ icon: Icon, }:{icon:any}) => {
    return <Icon size={20} />;
  };

  return (
    <>
      <div className="bg-lightprimary dark:bg-lightprimary -mt-2">
        <div className="flex justify-end ">
          {ProfileTabs.map((tab,index) => (
            <button
            key={index}
              onClick={() => navigate(tab.to)}
              className={
                location === tab.to
                  ? "flex gap-2 items-center px-4 py-3 border-b-2 border-primary text-primary"
                  : "flex gap-2 items-center px-4 py-3 border-b-2 border-transparent text-ld opacity-80"
              }
            >
              <IconWrapper icon={tab.icon} />
              <span className="md:block hidden">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
