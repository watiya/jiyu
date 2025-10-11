import CardBox from 'src/components/shared/CardBox';
import Defaultpopover from './Code/DefaultPopoverCode';
import DefaultpopoverCode from './Code/DefaultPopoverCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default popover</h4>
            <Defaultpopover />
          </div>
          <CodeDialog>{DefaultpopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultPopover;
