import CardBox from 'src/components/shared/CardBox';
import Toastcolors from './Code/ToastColorsCode';
import ToastcolorsCode from './Code/ToastColorsCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ToastColors = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Toast Colors</h4>
            <Toastcolors />
          </div>
          <CodeDialog>{ToastcolorsCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ToastColors;
