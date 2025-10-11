import CardBox from 'src/components/shared/CardBox';
import DefaultTbl from './Code/DefaultTblCode';
import DefaultTblCode from './Code/DefaultTblCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultTable = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Table</h4>
            <DefaultTbl />
          </div>
          <CodeDialog>{DefaultTblCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultTable;
