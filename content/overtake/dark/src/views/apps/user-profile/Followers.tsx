

import FollowersApp from "src/components/apps/userprofile/followers";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Followers",
  },
];
const Followers = () => {
  return (
    <>
      <BreadcrumbComp title="Followers" items={BCrumb} />
      <FollowersApp />
    </>
  );
};

export default Followers;
