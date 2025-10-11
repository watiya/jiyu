import CardBox from 'src/components/shared/CardBox';
import DisableBackDrop from './Code/DisableBackDropCode';
import DisableBackDropCode from './Code/DisableBackDropCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CustomBackDrop = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Disable BackDrop</h4>
            <DisableBackDrop />
          </div>
          <CodeDialog>{DisableBackDropCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CustomBackDrop;
