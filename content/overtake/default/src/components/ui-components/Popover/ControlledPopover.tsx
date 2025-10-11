import CardBox from 'src/components/shared/CardBox';
import Controlledpopover from './Code/ControlledPopoverCode';
import ControlledpopoverCode from './Code/ControlledPopoverCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ControlledPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Controlled</h4>
            <Controlledpopover />
          </div>
          <CodeDialog>{ControlledpopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ControlledPopover;
