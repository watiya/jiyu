import CardBox from 'src/components/shared/CardBox';
import Dotindicator from './Code/DotIndicatorCode';
import DotindicatorCode from './Code/DotIndicatorCode.tsx?raw';
import CodeDialog from '../CodeDialog.tsx';

const DotIndicator = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Dot indicator</h4>
            <Dotindicator />
          </div>
          <CodeDialog>{DotindicatorCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DotIndicator;
