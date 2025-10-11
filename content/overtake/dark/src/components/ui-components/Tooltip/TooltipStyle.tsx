import CardBox from 'src/components/shared/CardBox';
import Tooltipstyle from './Code/TooltipStyleCode';
import TooltipstyleCode from './Code/TooltipStyleCode.tsx?raw';
import CodeDialog from '../CodeDialog';
const TooltipStyle = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Tooltip Styles</h4>
            <Tooltipstyle />
          </div>
          <CodeDialog>{TooltipstyleCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TooltipStyle;
