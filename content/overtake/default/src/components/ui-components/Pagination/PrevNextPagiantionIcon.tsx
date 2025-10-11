import CardBox from 'src/components/shared/CardBox';
import PrevNextIcon from './Code/PrevNextIconCode';
import PrevNextIconCode from './Code/PrevNextIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PrevNextPagiantionIcon = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">With Icon</h4>
            <PrevNextIcon />
          </div>
          <CodeDialog>{PrevNextIconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PrevNextPagiantionIcon;
