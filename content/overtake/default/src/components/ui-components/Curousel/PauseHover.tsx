import CardBox from 'src/components/shared/CardBox';
import Pausehover from './Code/PauseHoverCode';
import PausehoverCode from './Code/PauseHoverCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PauseHover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Pause On Hover</h4>
            <Pausehover />
          </div>
          <CodeDialog>{PausehoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PauseHover;
