import { useState } from 'react';
import { Pagination } from 'flowbite-react';

const ControlTextCode = () => {
  const [controltextPage, setControltextPage] = useState(1);
  const onControtextChange = (page: number) => setControltextPage(page);

  return (
    <div>
      <div className="overflow-x-auto">
        <Pagination
          layout="pagination"
          currentPage={controltextPage}
          totalPages={1000}
          onPageChange={onControtextChange}
          previousLabel="Go back"
          nextLabel="Go forward"
          showIcons
        />
      </div>
    </div>
  );
};

export default ControlTextCode;
