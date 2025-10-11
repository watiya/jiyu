import CardBox from 'src/components/shared/CardBox';
import Coloroptions from './Code/ColorOptionsCode';
import ColoroptionsCode from './Code/ColorOptionsCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ColorOptions = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Color Options</h4>
            <Coloroptions />
          </div>
          <CodeDialog>{ColoroptionsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ColorOptions;
