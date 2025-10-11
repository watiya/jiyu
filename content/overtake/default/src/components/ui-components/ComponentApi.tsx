import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import CardBox from 'src/components/shared/CardBox';

export default function ComponentApi({ allApis, componentName }: any) {
  return (
    <CardBox>
      <div>
        <h5 className="text-xl font-semibold">
          API <span className="text-lg"> ( {componentName} ) </span>
        </h5>
      </div>
      <div className="border rounded-md border-ld overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <Table className="" hoverable>
            <TableHead>
              <TableHeadCell className="text-sm !text-bodytext font-semibold py-3 uppercase">
                Prop
              </TableHeadCell>
              <TableHeadCell className="text-sm !text-bodytext font-semibold py-3 uppercase">
                Description
              </TableHeadCell>
              <TableHeadCell className="text-sm !text-bodytext font-semibold py-3 uppercase">
                Type
              </TableHeadCell>
              <TableHeadCell className="text-sm !text-bodytext font-semibold py-3 uppercase">
                Default
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-border dark:divide-darkborder ">
              {allApis.map((item: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-bodytext text-sm font-semibold">{item.prop}</p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-bodytext text-sm">{item.description}</p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <span className="py-1 px-3 rounded-md bg-gray-100 dark:bg-white/20 block w-fit">
                      <p className="text-bodytext text-sm">{item.type}</p>
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <span className="py-1 px-3 rounded-md bg-gray-100 dark:bg-white/20 block w-fit">
                      <p className="text-bodytext text-sm">{item.default}</p>
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </CardBox>
  );
}
