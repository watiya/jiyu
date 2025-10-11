import CardBox from 'src/components/shared/CardBox';
import Basiccard from './code/BasicCardCode';
import BasiccardCode from './code/BasicCardCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const BasicCard = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Basic Card</h4>
            <Basiccard />
          </div>
          <CodeDialog>{BasiccardCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default BasicCard;
