

import icon1 from "/src/assets/images/svgs/icon-map-pin.svg";
import icon2 from "/src/assets/images/svgs/icon-database.svg";
import icon3 from "/src/assets/images/svgs/icon-phone.svg";
import icon4 from "/src/assets/images/svgs/icon-screen-share.svg";
import icon5 from "/src/assets/images/svgs/icon-mail.svg";
import CardBox from "src/components/shared/CardBox";


const UpcommingActCard = () => {
  const RecentTransData = [
    {
      img: icon1,
      title: "Trip to singapore",
      subtitle: "working on",
      rank: "5 mins",
      bgcolor: "primary",
    },
    {
      img: icon2,
      title: "Archived Data",
      subtitle: "working on",
      rank: "10 mins",
      bgcolor: "primary",
    },
    {
      img: icon3,
      title: "Meeting with client",
      subtitle: "pending",
      rank: "10 mins",
      bgcolor: "warning",
    },
    {
      img: icon4,
      title: "Screening Task Team",
      subtitle: "working on",
      rank: "20 mins",
      bgcolor: "error",
    },
    {
        img: icon5,
        title: "Send envelope to John",
        subtitle: "Done",
        rank: "20 mins",
        bgcolor: "success",
      },
  ];
  return (
    <>
      <CardBox className="pb-7">
        <div>
          <h5 className="card-title">Upcoming Activity</h5>
          <p className="card-subtitle">In New year</p>
        </div>
        <div className="mt-7 flex flex-col gap-6">
          {RecentTransData.map((item, index) => (
            <div className="flex gap-3.5 items-center" key={index}>
              <div
                className={`h-11 w-11 rounded-md flex justify-center items-center bg-light${item.bgcolor} dark:bg-dark${item.bgcolor}`}
              >
                <img src={item.img} alt="icon" className="h-6 w-6" />
              </div>
              <div>
                <h5 className="text-base">{item.title}</h5>
                <p className="text-sm text-bodytext">{item.subtitle}</p>
              </div>
              <div
                className={`ms-auto font-medium text-dark dark:text-white`}
              >
                {item.rank}
              </div>
            </div>
          ))}
        </div>
      </CardBox>
    </>
  );
};

export default UpcommingActCard;
