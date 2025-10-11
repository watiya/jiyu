import CardBox from 'src/components/shared/CardBox';
import Alignspinner from './Code/AlignSpinnerCode';
import AlignspinnerCode from './Code/AlignSpinnerCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const AlignSpinner = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Alignment</h4>
            <Alignspinner />
          </div>
          <CodeDialog>{AlignspinnerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AlignSpinner;
