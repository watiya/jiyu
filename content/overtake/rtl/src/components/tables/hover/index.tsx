
import { Badge, Table, Dropdown, DropdownItem, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import * as basicTable5 from "../../tables/tableData.ts";
import { IconDots } from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import TitleCard from "src/components/shared/TitleBorderCard.tsx";


const index = () => {
  /*Table Action*/
  const tableActionData = [
    {
      icon: "tabler:plus",
      listtitle: "Add",
    },
    {
      icon: "tabler:edit",
      listtitle: "Edit",
    },
    {
      icon: "tabler:trash",
      listtitle: "Delete",
    },
  ];
  return (
    <>
      <TitleCard title="Hover Table">
        <div className="border rounded-md border-ld overflow-hidden">
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell className="text-base font-semibold py-3">
                  Authors
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold py-3">
                  Courses
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold py-3">
                  Users
                </TableHeadCell>
                <TableHeadCell className="text-base font-semibold py-3"></TableHeadCell>
              </TableHead>
              <TableBody className="divide-y divide-border dark:divide-darkborder ">
                {basicTable5.basicTableData5.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="whitespace-nowrap">
                      <div className="flex gap-3 items-center">
                        <img
                          src={item.avatar}
                          alt="icon"
                          className="h-10 w-10 rounded-md"
                        />
                        <div className="truncat line-clamp-2  max-w-56">
                          <h6 className="text-base">{item.name}</h6>
                          <p className="text-sm text-bodytext">{item.handle}</p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="whitespace-nowrap">
                      <div className="flex gap-2">
                        {item.courses.map((crs, index) => (
                          <Badge
                            key={index}
                            color={`light${crs.statuscolor}`}
                            className="capitalize"
                          >
                            {crs.status}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">{item.users}</p>
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                            <IconDots size={22} />
                          </span>
                        )}
                      >
                        {tableActionData.map((items, index1) => (
                          <DropdownItem key={index1} className="flex gap-3">
                            <Icon icon={`${items.icon}`} height={18} />
                            <span>{items.listtitle}</span>
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </TitleCard>
    </>
  );
};

export default index;
