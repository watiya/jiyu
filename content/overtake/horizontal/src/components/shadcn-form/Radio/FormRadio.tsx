import CodeDialog from 'src/components/ui-components/CodeDialog';
import CardBox from '../../shared/CardBox';
import Formradio from './code/FormRadioCode';
import FormRadioCode from './code/FormRadioCode.tsx?raw';

const FormRadio = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Form Radio Group</h4>
          <Formradio />
        </div>
        <CodeDialog>{FormRadioCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default FormRadio;
