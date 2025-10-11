import CardBox from 'src/components/shared/CardBox';
import DropdownHeader from './Code/DropDownHeaderCode';
import DropDownHeaderCode from './Code/DropDownHeaderCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DropDownHeader = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Dropdown Header</h4>
            <DropdownHeader />
          </div>
          <CodeDialog>{DropDownHeaderCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default DropDownHeader;
