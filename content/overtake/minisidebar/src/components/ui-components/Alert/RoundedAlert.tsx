import CardBox from 'src/components/shared/CardBox';
import Roundedalert from './Code/RoundedAlertCode';
import RoundedalertCode from './Code/RoundedAlertCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const RoundedAlert = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Rounded Alert</h4>
            <Roundedalert />
          </div>
          <CodeDialog>{RoundedalertCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default RoundedAlert;
