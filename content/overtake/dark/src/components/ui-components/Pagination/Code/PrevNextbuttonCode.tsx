import { useState } from 'react';
import { Pagination } from 'flowbite-react';

const PrevNextbuttonCode = () => {
  const [flowPagin, setFlowPagin] = useState(1);
  const onFlowChange = (page: number) => setFlowPagin(page);

  return (
    <div>
      <div className="overflow-x-auto">
        <Pagination
          layout="navigation"
          currentPage={flowPagin}
          totalPages={100}
          onPageChange={onFlowChange}
        />
      </div>
    </div>
  );
};

export default PrevNextbuttonCode;
