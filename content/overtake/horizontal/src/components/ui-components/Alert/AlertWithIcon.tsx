import CardBox from 'src/components/shared/CardBox';
import AlertWithicon from './Code/AlertWithIconCode';
import AlertWithiconCode from './Code/AlertWithIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const AlertWithIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Alert With Icon</h4>
            <AlertWithicon />
          </div>
          <CodeDialog>{AlertWithiconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AlertWithIcon;
