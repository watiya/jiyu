import CardBox from 'src/components/shared/CardBox';
import DefautBadge from './Code/DefautBadgeCode';
import DefautBadgeCode from './Code/DefautBadgeCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const Default = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Badges</h4>
            <DefautBadge />
          </div>
          <CodeDialog>{DefautBadgeCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default Default;
