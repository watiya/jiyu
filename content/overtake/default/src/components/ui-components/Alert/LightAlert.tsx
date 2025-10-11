import CardBox from 'src/components/shared/CardBox';
import LightDefaultAlert from './Code/LightDefaultAlertCode';
import LightDefaultAlertCode from './Code/LightDefaultAlertCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LightAlert = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Light Default Alert</h4>
            <LightDefaultAlert />
          </div>
          <CodeDialog>{LightDefaultAlertCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LightAlert;
