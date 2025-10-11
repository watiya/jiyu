import CardBox from 'src/components/shared/CardBox';
import Listbutton from './Code/ListButtonCode';
import ListbuttonCode from './Code/ListButtonCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ListButton = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">List group with buttons</h4>
            <Listbutton />
          </div>
          <CodeDialog>{ListbuttonCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ListButton;
