import CardBox from 'src/components/shared/CardBox';
import WithLabelswitch from './Codes/WithLabelSwitchCode';
import WithLabelswitchCode from './Codes/WithLabelSwitchCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const WithLabelSwitch = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Adding a Label</h4>
            <WithLabelswitch />
          </div>
          <CodeDialog>{WithLabelswitchCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithLabelSwitch;
