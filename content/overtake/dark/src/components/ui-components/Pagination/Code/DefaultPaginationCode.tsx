import { useState } from 'react';
import { Pagination } from 'flowbite-react';

const DefaultPaginationCode = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      <div className="overflow-x-auto">
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default DefaultPaginationCode;
