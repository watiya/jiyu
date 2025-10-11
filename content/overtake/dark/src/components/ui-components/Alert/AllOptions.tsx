import CardBox from 'src/components/shared/CardBox';
import Alloptions from './Code/AllOptionscode';
import Alloptionscode from './Code/AllOptionscode.tsx?raw';
import CodeDialog from '../CodeDialog';

const AllOptions = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">All Options</h4>
            <Alloptions />
          </div>
          <CodeDialog>{Alloptionscode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AllOptions;
