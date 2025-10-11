import { useState } from 'react';
import { Pagination } from 'flowbite-react';

const WithIconCode = () => {
  const [currentPages, setCurrentPages] = useState(1);
  const onPageChanges = (page: number) => setCurrentPages(page);

  return (
    <div>
      <div className="overflow-x-auto">
        <Pagination
          currentPage={currentPages}
          totalPages={100}
          onPageChange={onPageChanges}
          showIcons
        />
      </div>
    </div>
  );
};

export default WithIconCode;
