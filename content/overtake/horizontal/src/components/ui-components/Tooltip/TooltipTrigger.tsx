import CardBox from 'src/components/shared/CardBox';
import Tooltiptrigger from './Code/TooltipTriggerCode';
import TooltiptriggerCode from './Code/TooltipTriggerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const TooltipTrigger = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Trigger Type</h4>
            <Tooltiptrigger />
          </div>
          <CodeDialog>{TooltiptriggerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TooltipTrigger;
