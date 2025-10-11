import CardBox from 'src/components/shared/CardBox';
import GroupWithicon from './Code/GroupWithIconCode';
import GroupWithiconCode from './Code/GroupWithIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const GroupWithIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Group With Icons</h4>
            <GroupWithicon />
          </div>
          <CodeDialog>{GroupWithiconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default GroupWithIcon;
