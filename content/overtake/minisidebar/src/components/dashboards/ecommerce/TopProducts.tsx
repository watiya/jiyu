
import CardBox from "../../shared/CardBox";
import { Badge, Dropdown, DropdownItem, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { HiOutlineDotsVertical  } from "react-icons/hi";
import { Table } from "flowbite-react";

import product1 from "/src/assets/images/svgs/icon-materialM.svg";
import product2 from "/src/assets/images/svgs/icon-matdash.svg";
import product3 from "/src/assets/images/svgs/icon-spike.svg";
import product4 from "/src/assets/images/svgs/icon-modernize.svg";
import product5 from "/src/assets/images/svgs/icon-materialpro.svg";

import techicon1 from "/src/assets/images/svgs/icon-photoshop.svg";
import techicon2 from "/src/assets/images/svgs/icon-figma.svg";
import techicon3 from "/src/assets/images/svgs/icon-vue.svg";
import techicon4 from "/src/assets/images/svgs/icon-xd.svg";
import techicon5 from "/src/assets/images/svgs/icon-bootstrap.svg";
import techicon6 from "/src/assets/images/svgs/icon-angular.svg";
import techicon7 from "/src/assets/images/svgs/icon-nextjs.svg";
import techicon8 from "/src/assets/images/svgs/icon-javascript.svg";


const TopProducts = () => {
  const dropdownItems = ["Action", "Another action", "Something else"];

  const TableData = [
    {
      imgBg: "primary",
      img: product1,
      leadname: "MaterialM - Admin",
      subtext: "Dashboard Template",
      statustext: "Mobile",
      statuscolor: "primary",
      sales: "2,350",
      earnings: "$24,235",
      techicon: [
        {
          id: 1,
          icon: techicon1,
        },
      ],
    },
    {
      imgBg: "secondary",
      img: product2,
      leadname: "MatDash - Admin",
      subtext: "Dashboard Template",
      statustext: "Web App",
      statuscolor: "success",
      sales: "1,630",
      earnings: "$13,699",
      techicon: [
        {
          id: 1,
          icon: techicon2,
        },
        {
          id: 2,
          icon: techicon3,
        },
      ],
    },
    {
      imgBg: "success",
      img: product3,
      leadname: "Spike - Admin",
      subtext: "Dashboard Template",
      statustext: "Website",
      statuscolor: "secondary",
      sales: "480",
      earnings: "$13,699",
      techicon: [
        {
          id: 1,
          icon: techicon4,
        },
        {
          id: 2,
          icon: techicon5,
        },
      ],
    },
    {
      imgBg: "warning",
      img: product4,
      leadname: "Modernize - Admin",
      subtext: "Dashboard Template",
      statustext: "Marketing",
      statuscolor: "success",
      sales: "874",
      earnings: "$10,250",
      techicon: [
        {
          id: 1,
          icon: techicon6,
        },
      ],
    },
    {
      imgBg: "error",
      img: product5,
      leadname: "MaterialPro - Admin",
      subtext: "Dashboard Template",
      statustext: "SSM",
      statuscolor: "warning",
      sales: "3715",
      earnings: "$36,400",
      techicon: [
        {
          id: 1,
          icon: techicon7,
        },
        {
          id: 2,
          icon: techicon8,
        },
      ],
    },
  ];

  return (
    <>
      <CardBox>
        <div className="flex items-center justify-between">
          <h5 className="card-title">Top Performing Products</h5>
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

        <div className="overflow-x-auto">
          <Table >
            <TableHead>
              <TableHeadCell className="ps-0">Product name</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Sales</TableHeadCell>
              <TableHeadCell>Earnings</TableHeadCell>
              <TableHeadCell className="pe-0 text-end">Technology</TableHeadCell>
            </TableHead>
            <TableBody>
              {TableData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap ps-0">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`h-14 w-14 rounded-md flex justify-center items-center bg-light${item.imgBg} dark:bg-dark${item.imgBg}`}
                      >
                        <img src={item.img} alt="icon" />
                      </div>
                      <div className="text-ld text-[15px]">
                        <p>{item.leadname}</p>
                        <span>{item.subtext}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge color={`light${item.statuscolor}`}>
                      {item.statustext}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-darklink">
                    {item.sales}
                  </TableCell>
                  <TableCell className="text-darklink">
                    {item.earnings}
                  </TableCell>
                  <TableCell className="pe-0 text-end">
                    <div className="flex gap-2 items-center justify-end">
                      {item.techicon.map((logo, i) => (
                        <img src={logo.icon} alt="icon" key={i} />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardBox>
    </>
  );
};

export default TopProducts;
