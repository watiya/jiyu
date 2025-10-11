import CodeDialog from 'src/components/ui-components/CodeDialog';
import CardBox from '../../shared/CardBox';
import DialogWithform from './code/DialogWithFormCode';
import DialogWithFormCode from './code/DialogWithFormCode.tsx?raw';


const DialogWithForm = () => {
  return (
    <CardBox className='p-0'>
      <div>
      <div className="p-6">
        <h4 className="text-lg font-semibold">Dialog With Form</h4>
        <DialogWithform />
      </div>
      <CodeDialog>{DialogWithFormCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default DialogWithForm;
