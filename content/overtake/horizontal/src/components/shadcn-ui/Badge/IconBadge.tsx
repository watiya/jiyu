import CardBox from '../../shared/CardBox';
import IconBadge from './code/IconBadgeCode';
import IconbadgeCode from './code/IconBadgeCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const Iconbadge = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Icon Badge</h4>
          <IconBadge />
        </div>
        <CodeDialog>{IconbadgeCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default Iconbadge;
