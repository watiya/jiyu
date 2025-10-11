import  { useContext } from "react";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";
import { Badge, TextInput } from "flowbite-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import { UserDataContext } from "src/context/UserDataContext";
import CardBox from "src/components/shared/CardBox";
import React from "react";

const socialiconCard = [
  {
    icon: <TbBrandFacebook size={17} />,
    color: "primary",
  },
  {
    icon: <TbBrandInstagram size={17} />,
    color: "error",
  },
  {
    icon: <TbBrandGithub size={17} />,
    color: "info",
  },
  {
    icon: <TbBrandTwitter size={17} />,
    color: "secondary",
  },
];
const FriendsCard = () => {
  const { followers, setSearch }: any = useContext(UserDataContext);


  return (
    <>
      <div className="md:flex justify-between mb-6">
        <h5 className="text-2xl flex gap-3 items-center sm:my-0 my-4">
          Friends <Badge color={"secondary"}>{followers.length}</Badge>
        </h5>
        <TextInput
          icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          type="text"
          sizing="md"
          className="form-control "
          placeholder="Search Friends"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-12 lg:gap-y-30 lg:gap-x-30 gap-y-30 gap-x-0">
        {followers.map((profile: { id: React.Key | null | undefined; avatar: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Iterable<React.ReactNode> | null | undefined; }) => {
          return (
            <div
              className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12"
              key={profile.id}
            >
              <CardBox className="px-0 pb-0  text-center overflow-hidden">
                <img
                  src={profile.avatar}
                  alt="MatDash"
                  className="rounded-full mx-auto"
                  height={80}
                  width={80}
                />
                <div>
                  <h5 className="text-lg mt-3">{profile.name}</h5>
                  <p className="text-xs text-darklink dark:text-bodytext">{profile.role}</p>
                </div>
                <div className="flex justify-center gap-4 items-center border-t border-ld mt-4 pt-4 bg-muted pb-4 dark:bg-darkmuted">
                  {socialiconCard.map((soc, index) => (
                    <Link
                      to={"#"}
                      className={`text-${soc.color}`}
                      key={index}
                    >
                      {soc.icon}
                    </Link>
                  ))}
                </div>
              </CardBox>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default FriendsCard;
