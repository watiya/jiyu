import CardBox from '../../shared/CardBox';
import Linkbadge from './code/LinkBadgeCode';
import LinkbadgeCode from './code/LinkBadgeCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const LinkBadge = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold">Badge as Link</h4>
            <Linkbadge />
          </div>
          <CodeDialog>{LinkbadgeCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default LinkBadge;
