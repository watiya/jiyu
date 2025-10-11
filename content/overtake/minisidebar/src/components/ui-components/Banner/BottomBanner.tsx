import CardBox from 'src/components/shared/CardBox';
import Bottombanner from './Code/BottomBannerCode';
import BottombannerCode from './Code/BottomBannerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const BottomBanner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Bottom Position</h4>
            <Bottombanner />
          </div>
          <CodeDialog>{BottombannerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BottomBanner;
