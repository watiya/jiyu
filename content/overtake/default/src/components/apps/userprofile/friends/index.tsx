
import { UserDataProvider } from "src/context/UserDataContext"
import ProfileBanner from "../profile/ProfileBanner"
import FriendsCard from "./FriendsCard"


const FriendsApp = () => {
  return (
    <>
      <UserDataProvider>
        <div className="grid grid-cols-12 gap-6">
          {/* Banner */}
          <div className="col-span-12">
            <ProfileBanner />
          </div>
          {/* FriendsCard */}
          <div className="col-span-12">
            <FriendsCard />
          </div>
        </div>
      </UserDataProvider>
    </>
  )
}

export default FriendsApp
