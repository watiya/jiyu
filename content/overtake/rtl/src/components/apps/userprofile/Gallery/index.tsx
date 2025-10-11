
import { UserDataProvider } from "src/context/UserDataContext";
import ProfileBanner from "../profile/ProfileBanner";
import GalleryCards from "./GalleryCards";



const GalleryApp = () => {
  return (
    <>
      <UserDataProvider>
        <div className="grid grid-cols-12 gap-6">
          {/* Banner */}
          <div className="col-span-12">
            <ProfileBanner />
          </div>
          {/* GalleryCards */}
          <div className="col-span-12">
            <GalleryCards />
          </div>
        </div>
      </UserDataProvider>
    </>
  );
};

export default GalleryApp;
