import CardBox from 'src/components/shared/CardBox';
import FullWidthMegaMenu from './Code/FullWidthMegamenuCode';
import FullWidthMegaMenuCode from './Code/FullWidthMegamenuCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const FullWidthMegamenu = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Full width dropdown</h4>
            <FullWidthMegaMenu />
          </div>
          <CodeDialog>{FullWidthMegaMenuCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FullWidthMegamenu;
