
import { UserDataProvider } from "src/context/UserDataContext";
import ProfileBanner from "../profile/ProfileBanner";
import FollowerCard from "./FollowerCard";



const FollowersApp = () => {
  return (
    <>
      <UserDataProvider>
        <div className="grid grid-cols-12 gap-6 ">
          {/* Banner */}
          <div className="col-span-12">
            <ProfileBanner />
          </div>
          {/* FollowerCard */}
          <div className="col-span-12">
            <FollowerCard />
          </div>
        </div>
      </UserDataProvider>
    </>
  );
};

export default FollowersApp;
