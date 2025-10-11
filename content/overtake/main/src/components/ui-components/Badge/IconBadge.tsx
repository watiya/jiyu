import CardBox from 'src/components/shared/CardBox';
import Iconbadge from './Code/IconCode';
import IconbadgeCode from './Code/IconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const IconBadge = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Icon Badges</h4>
            <Iconbadge />
          </div>
          <CodeDialog>{IconbadgeCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default IconBadge;
