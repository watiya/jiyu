import CardBox from 'src/components/shared/CardBox';
import Defaultspinner from './Code/DefaultSpinnerCode';
import DefaultspinnerCode from './Code/DefaultSpinnerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultSpinner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Spinner</h4>
            <Defaultspinner />
          </div>
          <CodeDialog>{DefaultspinnerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultSpinner;
