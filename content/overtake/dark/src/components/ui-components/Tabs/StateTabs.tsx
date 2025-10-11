import CardBox from 'src/components/shared/CardBox';
import Statetabs from './Code/StateTabsCode';
import StatetabsCode from './Code/StateTabsCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const StateTabs = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">React state options</h4>
            <Statetabs />
          </div>
          <CodeDialog>{StatetabsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default StateTabs;
