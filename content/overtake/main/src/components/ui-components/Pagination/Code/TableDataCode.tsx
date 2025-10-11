import { useState } from 'react';
import { Pagination } from 'flowbite-react';

const TableDataCode = () => {
  const [tablePage, setTablePage] = useState(1);
  const onTableChange = (page: number) => setTablePage(page);

  return (
    <div>
      <div>
        <Pagination
          layout="table"
          currentPage={tablePage}
          totalPages={100}
          onPageChange={onTableChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default TableDataCode;
