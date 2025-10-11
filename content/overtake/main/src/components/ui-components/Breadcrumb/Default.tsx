import CardBox from 'src/components/shared/CardBox';
import BDefault from './Code/BDefaultCode';
import BDefaultCode from './Code/BDefaultCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const Default = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Breadcrumb</h4>
            <BDefault />
          </div>
          <CodeDialog>{BDefaultCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default Default;
