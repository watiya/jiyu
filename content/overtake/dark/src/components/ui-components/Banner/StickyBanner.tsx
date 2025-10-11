import CardBox from 'src/components/shared/CardBox';
import Stickybanner from './Code/StickyBannerCode';
import StickybannerCode from './Code/StickyBannerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const StickyBanner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default sticky banner</h4>
            <Stickybanner />
          </div>
        </div>
        <CodeDialog>{StickybannerCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default StickyBanner;
