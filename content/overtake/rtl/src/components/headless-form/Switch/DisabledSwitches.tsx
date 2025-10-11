import CardBox from 'src/components/shared/CardBox';
import Disableswitches from './Codes/DisableSwitchesCode';
import DisableswitchesCode from './Codes/DisableSwitchesCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const DisabledSwitches = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Disabled Switches</h4>
            <Disableswitches />
          </div>
          <CodeDialog>{DisableswitchesCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DisabledSwitches;
