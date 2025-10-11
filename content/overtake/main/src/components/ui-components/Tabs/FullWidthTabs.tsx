import CardBox from 'src/components/shared/CardBox';
import FullWidthtabs from './Code/FullWidthTabsCode';
import FullWidthtabsCode from './Code/FullWidthTabsCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const FullWidthTabs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Full Width Tabs</h4>
            <FullWidthtabs />
          </div>
          <CodeDialog>{FullWidthtabsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FullWidthTabs;
