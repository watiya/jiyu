import CardBox from 'src/components/shared/CardBox';
import LightBorderacccent from './Code/LightBorderAcccentCode';
import LightBorderacccentCode from './Code/LightBorderAcccentCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LightBorderAccent = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Light Border Accent</h4>
            <LightBorderacccent />
          </div>
          <CodeDialog>{LightBorderacccentCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LightBorderAccent;
