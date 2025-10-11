import CardBox from 'src/components/shared/CardBox';
import LinkBadge from './Code/LinkBadgeCode';
import LinkBadgeCode from './Code/LinkBadgeCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LinkBadges = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Badges as link</h4>
            <LinkBadge />
          </div>
          <CodeDialog>{LinkBadgeCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default LinkBadges;
