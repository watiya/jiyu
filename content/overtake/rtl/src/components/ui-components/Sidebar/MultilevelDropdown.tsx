import CardBox from 'src/components/shared/CardBox';
import Multileveldropdown from './Code/MultilevelDropdownCode';
import MultileveldropdownCode from './Code/MultilevelDropdownCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const MultilevelDropdown = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Multi-level dropdown</h4>
          <Multileveldropdown />
        </div>
        <CodeDialog>{MultileveldropdownCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default MultilevelDropdown;
