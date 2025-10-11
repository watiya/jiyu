import CardBox from 'src/components/shared/CardBox';
import Defaultcurousel from './Code/DefaultCurouselCode';
import DefaultcurouselCode from './Code/DefaultCurouselCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultCusrosel = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Carousel</h4>
            <Defaultcurousel />
          </div>
          <CodeDialog>{DefaultcurouselCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultCusrosel;
