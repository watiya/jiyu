import {
  Table,
  Kbd,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from 'react-icons/md';

const InsideTableCode = () => {
  return (
    <div className='overflow-x-auto'>
      <Table>
        <TableHead>
          <TableHeadCell>Key</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y divide-border">
          <TableRow className="bg-white dark:border-darkborder dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Kbd className="rounded-md">Shift</Kbd> <span>or</span>{' '}
              <Kbd className="rounded-md">Tab</Kbd>
            </TableCell>
            <TableCell>Navigate to interactive elements</TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-darkborder dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Kbd className="rounded-md">Enter</Kbd> or <Kbd className="rounded-md">Spacebar</Kbd>
            </TableCell>
            <TableCell>
              Ensure elements with ARIA role="button" can be activated with both key commands.
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-darkborder dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <span className="inline-flex gap-2">
                <Kbd icon={MdKeyboardArrowUp} />
                <Kbd icon={MdKeyboardArrowDown} />
              </span>
              <span> or </span>
              <span className="inline-flex gap-2">
                <Kbd icon={MdKeyboardArrowLeft} />
                <Kbd icon={MdKeyboardArrowRight} />
              </span>
            </TableCell>
            <TableCell>Choose and activate previous/next tab.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InsideTableCode;
