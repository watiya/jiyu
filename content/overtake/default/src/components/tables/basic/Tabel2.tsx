
import { Badge, Dropdown, DropdownItem, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import * as basicTable2 from "../../tables/tableData.ts";
import { IconDotsVertical } from "@tabler/icons-react";
import { Icon } from "@iconify/react";

const BasicTable2 = () => {
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
              User
            </TableHeadCell>
            <TableHeadCell className="text-base font-semibold py-3">
              Project Name
            </TableHeadCell>
            <TableHeadCell className="text-base font-semibold py-3">
              Users
            </TableHeadCell>
            <TableHeadCell className="text-base font-semibold py-3">
              Status
            </TableHeadCell>
            <TableHeadCell className="text-base font-semibold py-3"></TableHeadCell>
          </TableHead>
          <TableBody className="divide-y divide-border dark:divide-darkborder ">
            {basicTable2.basicTableData2.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.avatar}
                      alt="icon"
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="truncat line-clamp-2  max-w-56">
                      <h6 className="text-base">{item.name}</h6>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <p className="text-bodytext text-base">{item.post}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <div className="flex ">
                    {item.users.map((user, index) => (
                      <div className="-ms-2" key={index}>
                        <img
                          src={user.icon}
                          className="border-2 border-white dark:border-darkborder rounded-full h-10 w-10 max-w-none"
                          alt="icon"
                        />
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  <Badge color={`light${item.statuscolor}`} className="capitalize">
                    {item.status}
                  </Badge>
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
                    {tableActionData.map((items, index) => (
                      <DropdownItem key={index} className="flex gap-3">
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

export default BasicTable2;
