import CardBox from 'src/components/shared/CardBox';
import DefaultTimeLine from './Code/DefaultTimelineCode';
import DefaultTimeLineCode from './Code/DefaultTimelineCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultTimeline = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Timeline</h4>
            <DefaultTimeLine />
          </div>
          <CodeDialog>{DefaultTimeLineCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultTimeline;
