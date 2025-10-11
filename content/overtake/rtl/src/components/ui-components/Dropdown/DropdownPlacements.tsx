import CardBox from 'src/components/shared/CardBox';
import DropdownPlacement from './Code/DropdownPlacementCode';
import DropdownPlacementCode from './Code/DropdownPlacementCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DropdownPalcements = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Placement Options</h4>
            <DropdownPlacement />
          </div>
          <CodeDialog>{DropdownPlacementCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DropdownPalcements;
