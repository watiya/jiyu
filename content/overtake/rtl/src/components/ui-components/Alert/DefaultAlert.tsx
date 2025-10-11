import CardBox from 'src/components/shared/CardBox';
import Defaultalert from './Code/DefaultAlertCode';
import DefaultalertCode from './Code/DefaultAlertCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultAlert = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Alert</h4>
            <Defaultalert />
          </div>
          <CodeDialog>{DefaultalertCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultAlert;
