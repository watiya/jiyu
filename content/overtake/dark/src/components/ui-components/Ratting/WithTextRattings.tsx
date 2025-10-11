import CardBox from 'src/components/shared/CardBox';
import WithTextrattings from './Code/WithTextRatingsCode';
import WithTextrattingsCode from './Code/WithTextRatingsCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const WithTextRattings = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rating With Text</h4>
            <WithTextrattings />
          </div>
          <CodeDialog>{WithTextrattingsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithTextRattings;
