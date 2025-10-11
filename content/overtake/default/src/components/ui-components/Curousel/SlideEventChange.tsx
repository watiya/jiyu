import CardBox from 'src/components/shared/CardBox';
import SlideEvent from './Code/SlideEventCode';
import SlideEventCode from './Code/SlideEventCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const SlideEventChange = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Handle Event</h4>
            <SlideEvent />
          </div>
          <CodeDialog>{SlideEventCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default SlideEventChange;
