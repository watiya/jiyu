import CardBox from 'src/components/shared/CardBox';
import Insidetable from './Code/InsideTableCode';
import InsidetableCode from './Code/InsideTableCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const InsideTable = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">KBD Inside Table</h4>
            <Insidetable />
          </div>
          <CodeDialog>{InsidetableCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default InsideTable;
