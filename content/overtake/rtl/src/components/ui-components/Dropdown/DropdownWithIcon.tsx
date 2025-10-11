import CardBox from 'src/components/shared/CardBox';
import DropDownIcon from './Code/DropDownIconCode';
import DropDownIconCode from './Code/DropDownIconCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DropdownWithIcon = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Dropdown items with icon</h4>
            <DropDownIcon />
          </div>
          <CodeDialog>{DropDownIconCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default DropdownWithIcon;
