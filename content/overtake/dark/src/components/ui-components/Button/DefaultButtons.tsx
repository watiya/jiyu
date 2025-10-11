import CardBox from 'src/components/shared/CardBox';
import DefaultButton from './Code/DefaultButtonCode';
import DefaultButtonCode from './Code/DefaultButtonCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultButtons = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Buttons</h4>
            <DefaultButton />
          </div>
          <CodeDialog>{DefaultButtonCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default DefaultButtons;
