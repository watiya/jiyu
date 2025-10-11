import CardBox from 'src/components/shared/CardBox';
import Defaultgroup from './Code/DefaultGroupCode';
import DefaultgroupCode from './Code/DefaultGroupCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultGroup = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Button Group</h4>
            <Defaultgroup />
          </div>
          <CodeDialog>{DefaultgroupCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultGroup;
