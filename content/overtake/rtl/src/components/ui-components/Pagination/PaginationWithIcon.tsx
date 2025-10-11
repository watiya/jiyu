import CardBox from 'src/components/shared/CardBox';
import WithIcon from './Code/WithIconCode';
import WithIconCode from './Code/WithIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PaginationWithIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Pagination With Icons</h4>
            <WithIcon />
          </div>
          <CodeDialog>{WithIconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PaginationWithIcon;
