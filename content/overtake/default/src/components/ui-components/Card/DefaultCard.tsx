import CardBox from 'src/components/shared/CardBox';
import Defaultcard from './Code/DefaultCardCode';
import DefaultcardCode from './Code/DefaultCardCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultCard = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Card</h4>
            <Defaultcard />
          </div>
          <CodeDialog>{DefaultcardCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultCard;
