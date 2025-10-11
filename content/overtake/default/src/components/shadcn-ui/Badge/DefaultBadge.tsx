import CardBox from '../../shared/CardBox';
import Defaultbadge from './code/DefaultBadgeCode';
import DefaultbadgeCode from './code/DefaultBadgeCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const DefaultBadge = () => {
  return (
    <CardBox className='p-0'>
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Default Badge</h4>
          <Defaultbadge />
        </div>
        <CodeDialog>{DefaultbadgeCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default DefaultBadge;
