import  { useContext } from "react";
import { Icon } from "@iconify/react";
import { Avatar, AvatarImageProps, Badge, Button, TextInput } from "flowbite-react";
import { UserDataContext } from "src/context/UserDataContext";
import CardBox from "src/components/shared/CardBox";
import React from "react";


const FollowerCard = () => {
  const { followers, toggleFollow, setSearch }:any = useContext(UserDataContext);

  return (
    <div>
      {/* Header Section */}
      <div className="md:flex justify-between mb-6">
        <h5 className="text-2xl flex gap-3 items-center sm:my-0 my-4">
          Followers <Badge color="secondary">{followers.length}</Badge>
        </h5>
        <TextInput
          icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          type="text"
          sizing="md"
          placeholder="Search Followers"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Followers List */}
      <div className="grid grid-cols-12 lg:gap-y-30 lg:gap-x-30 gap-y-30 gap-x-0">
        {followers.map((profile: { id: React.Key | null | undefined; avatar: string | ((props: AvatarImageProps) => React.ReactElement) | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; country: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; isFollowed: any; }) => (
          <div
            className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12"
            key={profile.id}
          >
            <CardBox>
              <div className="flex gap-3 lg:flex-nowrap flex-wrap">
                <Avatar img={profile.avatar} className="shrink-0" rounded />
                <div>
                  <h6 className="text-base text-nowrap">{profile.name}</h6>
                  <p className="flex gap-1 items-center mt-0.5">
                    <Icon icon="solar:map-point-outline" height="14" />{" "}
                    <span className="truncate line-clamp-1 max-w-[112px] text-wrap text-darklink dark:text-bodytext">
                      {profile.country}
                    </span>
                  </p>
                </div>
                <div className="lg:ms-auto">
                  {profile.isFollowed ? (
                    <Button
                      color="primary"
                      size="sm"
                      onClick={() => toggleFollow(profile.id)}
                    >
                      Followed
                    </Button>
                  ) : (
                    <Button
                      color="outlineprimary"
                      size="sm"
                      onClick={() => toggleFollow(profile.id)}
                    >
                      Follow
                    </Button>
                  )}
                </div>
              </div>
            </CardBox>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowerCard;
