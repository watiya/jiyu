
import { Badge, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import * as basicTable from "../../tables/tableData.ts";


const BasicTable1 = () => {
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
                Team
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3">
                Status
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3">
                Budget
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-border dark:divide-darkborder ">
              {basicTable.basicTableData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.avatar}
                        alt="icon"
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="truncat line-clamp-2 max-w-56">
                        <h6 className="text-base">{item.name}</h6>
                        <p className="text-sm text-bodytext">{item.post}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-bodytext text-base">{item.pname}</p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex ">
                      {item.teams.map((teamtbl, index) => (
                        <div className="-ms-2" key={index}>
                          <div
                            className={`bg-${teamtbl.color} text-white border-2 border-white dark:border-darkborder  h-10 w-10 flex justify-center items-center text-xl font-medium text-dark dark:text-white rounded-full`}
                          >
                            {teamtbl.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      color={`light${item.statuscolor}`}
                      className="capitalize"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <h6 className="text-base">{item.budget}</h6>
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

export default BasicTable1;
