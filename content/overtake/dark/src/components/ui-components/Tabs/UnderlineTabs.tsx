import CardBox from 'src/components/shared/CardBox';
import UnderLineTabs from './Code/UnderlineTabsCode';
import UnderLineTabsCode from './Code/UnderlineTabsCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const UnderlineTabs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Tabs With Underline</h4>
            <UnderLineTabs />
          </div>
          <CodeDialog>{UnderLineTabsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default UnderlineTabs;
