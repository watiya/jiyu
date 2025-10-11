import CardBox from 'src/components/shared/CardBox';
import CardWithForm from './Code/CardWithFormCode';
import CardWithFormCode from './Code/CardWithFormCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const FormCard = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Card With Form</h4>
            <CardWithForm />
          </div>
          <CodeDialog>{CardWithFormCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FormCard;
