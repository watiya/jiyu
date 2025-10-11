import CardBox from 'src/components/shared/CardBox';
import Loadbutton from './Code/LoadButtonCode';
import LoadbuttonCode from './Code/LoadButtonCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LoadButton = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Loading buttons</h4>
            <Loadbutton />
          </div>
          <CodeDialog>{LoadbuttonCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LoadButton;
