
import user1 from "/src/assets/images/profile/user-6.jpg";
import user2 from "/src/assets/images/profile/user-2.jpg";
import user3 from "/src/assets/images/profile/user-3.jpg";
import { Button } from "flowbite-react";
import { IconMapPin } from "@tabler/icons-react";
import CardBox from "src/components/shared/CardBox";
/*--Profile Cards--*/
const profilecards = [
  {
    title: "Andrew Grant",
    subtitle: "Sint Maarten",
    avatar: user1,
  },
  {
    title: "Leo Pratt",
    subtitle: "Bulgaria",
    avatar: user2,
  },
  {
    title: "Charles Nunez",
    subtitle: "Nepal",
    avatar: user3,
  },
];

const ProfileCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-[30px]">
        {profilecards.map((item, i) => (
          <div className="lg:col-span-4 col-span-12" key={i}>
            <CardBox>
              <div className="flex items-center">
                <img
                  src={item.avatar}
                  alt="MatDash"
                  className="h-10 w-10 rounded-full"
                />
                <div className="ms-3">
                  <h5 className="text-lg">{item.title}</h5>
                  <p className="text-xs text-bodytext flex gap-1 items-center"><IconMapPin size={15}/> {item.subtitle}</p>
                </div>
                <Button color={"primary"} className="w-fit ms-auto">
                  Follow
                </Button>
              </div>
            </CardBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileCards;
