import CardBox from 'src/components/shared/CardBox';
import Weekstart from './Code/WeekStartCode';
import WeekstartCode from './Code/WeekStartCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const WeekStart = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Week Start</h4>
            <Weekstart />
          </div>
          <CodeDialog>{WeekstartCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WeekStart;
