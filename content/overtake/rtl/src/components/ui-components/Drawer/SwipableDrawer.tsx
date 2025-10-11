import CardBox from 'src/components/shared/CardBox';
import Swipeable from './Code/SwipeableCode';
import SwipeableCode from './Code/SwipeableCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const SwipableDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Swipeable</h4>
            <Swipeable />
          </div>
          <CodeDialog>{SwipeableCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SwipableDrawer;
