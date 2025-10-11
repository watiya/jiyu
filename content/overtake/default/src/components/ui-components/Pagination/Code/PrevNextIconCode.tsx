import { useState } from 'react';
import { Pagination } from 'flowbite-react';

const PrevNextIconCode = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      <div>
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default PrevNextIconCode;
