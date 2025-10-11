import CardBox from 'src/components/shared/CardBox';
import PlacementTooltip from './Code/PlacementTooltipCode';
import PlacementTooltipCode from './Code/PlacementTooltipCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const TooltipPlacement = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Tooltip Placement</h4>
            <PlacementTooltip />
          </div>
          <CodeDialog>{PlacementTooltipCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TooltipPlacement;
