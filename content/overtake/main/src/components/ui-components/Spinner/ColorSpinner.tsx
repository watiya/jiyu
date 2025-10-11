import CardBox from 'src/components/shared/CardBox';
import Colorspinner from './Code/ColorSpinnerCode';
import ColorspinnerCode from './Code/ColorSpinnerCode.tsx?raw';
import CodeDialog from '../CodeDialog';
const ColorSpinner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Spinner colors</h4>
            <Colorspinner />
          </div>
          <CodeDialog>{ColorspinnerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ColorSpinner;
