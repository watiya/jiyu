import CardBox from 'src/components/shared/CardBox';
import Animationtooltip from './Code/AnimationTooltipCode';
import AnimationtooltipCode from './Code/AnimationTooltipCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const AnimatioTooltip = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Animation Tooltip</h4>
            <Animationtooltip />
          </div>
          <CodeDialog>{AnimationtooltipCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AnimatioTooltip;
