import CardBox from 'src/components/shared/CardBox';
import LabelPosition from './Code/LabelPositionCode';
import LabelPositionCode from './Code/LabelPositionCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LabelPostionProgress = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Progress Bar Label Positioning</h4>
            <LabelPosition />
          </div>
          <CodeDialog>{LabelPositionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LabelPostionProgress;
