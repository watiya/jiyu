import CardBox from 'src/components/shared/CardBox';
import LightAlertIcon from './Code/LightAlertIconCode';
import LightAlertIconCode from './Code/LightAlertIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LightAlertWithIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Light Alert With Icon</h4>
            <LightAlertIcon />
          </div>
          <CodeDialog>{LightAlertIconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LightAlertWithIcon;
