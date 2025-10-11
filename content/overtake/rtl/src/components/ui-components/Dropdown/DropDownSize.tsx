import CardBox from 'src/components/shared/CardBox';
import DropdownSizes from './Code/DropdownSizesCode';
import DropdownSizesCode from './Code/DropdownSizesCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DropDownSize = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Dropdown sizes</h4>
            <DropdownSizes />
          </div>
          <CodeDialog>{DropdownSizesCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DropDownSize;
