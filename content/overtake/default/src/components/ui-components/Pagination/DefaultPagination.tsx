import CardBox from 'src/components/shared/CardBox';
import Defaultpagination from './Code/DefaultPaginationCode';
import DefaultpaginationCode from './Code/DefaultPaginationCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultPagination = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Pagination</h4>
            <Defaultpagination />
          </div>
          <CodeDialog>{DefaultpaginationCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultPagination;
