import CardBox from 'src/components/shared/CardBox';
import CardWithlist from './Code/CardWithListCode';
import CardWithlistCode from './Code/CardWithListCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CardWithList = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Card With List</h4>
            <CardWithlist />
          </div>
          <CodeDialog>{CardWithlistCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CardWithList;
