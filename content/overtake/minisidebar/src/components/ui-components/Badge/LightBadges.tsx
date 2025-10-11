import CardBox from 'src/components/shared/CardBox';
import LightBadge from './Code/LightBadgeCode';
import LightBadgeCode from './Code/LightBadgeCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LightBadges = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Light Badges</h4>
            <LightBadge />
          </div>
          <CodeDialog>{LightBadgeCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default LightBadges;
