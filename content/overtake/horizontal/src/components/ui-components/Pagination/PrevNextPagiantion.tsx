import CardBox from 'src/components/shared/CardBox';
import PrevNextbutton from './Code/PrevNextbuttonCode';
import PrevNextbuttonCode from './Code/PrevNextbuttonCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PrevNextPagiantion = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Previous And Next Button</h4>
            <PrevNextbutton />
          </div>
          <CodeDialog>{PrevNextbuttonCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PrevNextPagiantion;
