import CardBox from 'src/components/shared/CardBox';
import Defaultfooter from './Code/DefaultFooterCode';
import DefaultfooterCode from './Code/DefaultFooterCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultFooter = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Footer</h4>
            <Defaultfooter />
          </div>
          <CodeDialog>{DefaultfooterCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultFooter;
