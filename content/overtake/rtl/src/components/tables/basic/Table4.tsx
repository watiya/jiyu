
import { Badge, Table, Dropdown, Progress, DropdownItem, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import * as basicTable4 from "../../tables/tableData.ts";
import { IconDotsVertical } from "@tabler/icons-react";
import { Icon } from "@iconify/react";

const BasicTable4 = () => {
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
      <div className="border rounded-md border-ld overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="">
            <TableHead>
              <TableHeadCell className="text-base font-semibold py-3">
                Invoice
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3">
                Status
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3">
                Customer
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3">
                Progress
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3"></TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-border dark:divide-darkborder ">
              {basicTable4.basicTableData4.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap">
                    <h6 className="text-sm">{item.invoice}</h6>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      color={`light${item.statuscolor}`}
                      className="capitalize "
                      icon={() => (
                        <item.statusicon size={15} className="me-1" />
                      )}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.avatar}
                        alt="icon"
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="truncat line-clamp-2 max-w-56">
                        <h6 className="text-base">{item.name}</h6>
                        <p className="text-sm text-bodytext">{item.handle}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="whitespace-nowrap">
                    <div className="text-bodytext text-sm flex items-center gap-3">
                      <div className="w-full">
                        <Progress
                          progress={item.progress}
                          className="w-full"
                          color="primary"
                          size={"sm"}
                        />
                      </div>
                      {item.progress}%
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                          <IconDotsVertical size={22} />
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
    </>
  );
};

export default BasicTable4;
