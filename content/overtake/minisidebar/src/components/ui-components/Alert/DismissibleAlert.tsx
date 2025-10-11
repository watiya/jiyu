import CardBox from 'src/components/shared/CardBox';
import Dismisablealert from './Code/DissmisableAlertCode';
import DismisablealertCode from './Code/DissmisableAlertCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DismissibleAlert = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Dismissible Alert</h4>
            <Dismisablealert />
          </div>
          <CodeDialog>{DismisablealertCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DismissibleAlert;
