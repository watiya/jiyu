import CardBox from 'src/components/shared/CardBox';
import StrippedTbl from './Code/StrippedTblCode';
import StrippedTblCode from './Code/StrippedTblCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const StrippedTable = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Striped Rows</h4>
            <StrippedTbl />
          </div>
          <CodeDialog>{StrippedTblCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default StrippedTable;
