import CardBox from 'src/components/shared/CardBox';
import FormCard from './code/FormCardCode';
import FormCardCode from './code/FormCardCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const BasicCard = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Form Card</h4>
            <FormCard />
          </div>
          <CodeDialog>{FormCardCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default BasicCard;
