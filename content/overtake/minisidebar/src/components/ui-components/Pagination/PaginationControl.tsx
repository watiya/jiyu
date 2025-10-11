import CardBox from 'src/components/shared/CardBox';
import ControlText from './Code/ControlTextCode';
import ControlTextCode from './Code/ControlTextCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PaginationControl = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Pagination Control Button Text</h4>
            <ControlText />
          </div>
          <CodeDialog>{ControlTextCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PaginationControl;
