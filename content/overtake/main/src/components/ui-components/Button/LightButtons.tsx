import CardBox from 'src/components/shared/CardBox';
import LightButton from './Code/LightButtoncode';
import LightButtonCode from './Code/LightButtoncode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LightButtons = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Light Buttons</h4>
            <LightButton />
          </div>
          <CodeDialog>{LightButtonCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default LightButtons;
