
import CardBox from "../../shared/CardBox";
import { Button, Dropdown, DropdownItem } from "flowbite-react";
import { HiOutlineDotsVertical  } from "react-icons/hi";

import icon1 from "/src/assets/images/svgs/icon-paypal.svg";
import icon2 from "/src/assets/images/svgs/icon-office-bag.svg";
import icon3 from "/src/assets/images/svgs/icon-master-card.svg";
import icon4 from "/src/assets/images/svgs/icon-money.svg";
import icon5 from "/src/assets/images/svgs/icon-pie.svg";


const RecentTransaction = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];
  const RecentTransData = [
    {
      img: icon1,
      title: "PayPal Transfer",
      subtitle: "Money added",
      rank: "+$6,235",
      disable: "",
      bgcolor: "secondary",
    },
    {
      img: icon2,
      title: "Wallet",
      subtitle: "Bill payment",
      rank: "+$345",
      disable: "opacity-80",
      bgcolor: "success",
    },
    {
      img: icon3,
      title: "Credit Card",
      subtitle: "Money reversed",
      rank: "+$2,235",
      disable: "",
      bgcolor: "warning",
    },
    {
      img: icon4,
      title: "Bank Transfer",
      subtitle: "Money added",
      rank: "+$320",
      disable: "opacity-80",
      bgcolor: "primary",
    },
    {
      img: icon5,
      title: "Refund",
      subtitle: "Bill Payment",
      rank: "-$32",
      disable: "opacity-80",
      bgcolor: "error",
    },
  ];
  return (
    <>
      <CardBox>
        <div className="flex items-center justify-between">
          <h5 className="card-title">Recent Transactions</h5>
          <div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                  <HiOutlineDotsVertical size={22} />
                </span>
              )}
            >
              {dropdownItems.map((items, index) => {
                return <DropdownItem key={index}>{items}</DropdownItem>;
              })}
            </Dropdown>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-7">
          {RecentTransData.map((item, index) => (
            <div className="flex gap-3 items-center" key={index}>
              <div
                className={`h-10 w-10 rounded-md flex justify-center items-center bg-light${item.bgcolor} dark:bg-dark${item.bgcolor}`}
              >
                <img src={item.img} alt="icon" className="h-6 w-6" />
              </div>
              <div>
                <h5 className="text-base">{item.title}</h5>
                <p className="text-sm text-darklink">{item.subtitle}</p>
              </div>
              <div className={`ms-auto font-medium text-ld ${item.disable}`}>{ item.rank }</div>
            </div>
          ))}
        </div>
        <div className="border-t border-ld mt-6">
          <Button color={'primary'} className="w-full mt-7">View All Transactions</Button>
        </div>
      </CardBox>
    </>
  );
};

export default RecentTransaction;
