import CardBox from 'src/components/shared/CardBox';
import CardWithimage from './Code/CardWithImageCode';
import CardWithimageCode from './Code/CardWithImageCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CardWithImage = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Card With Image</h4>
            <CardWithimage />
          </div>
          <CodeDialog>{CardWithimageCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CardWithImage;
