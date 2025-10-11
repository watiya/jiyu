import CardBox from 'src/components/shared/CardBox';
import WithTransition from './Codes/WithTransitionCode';
import WithTransitionCode from './Codes/WithTransitionCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const WithTransitionsSwitch = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Adding Transitions</h4>
            <WithTransition />
          </div>
          <CodeDialog>{WithTransitionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithTransitionsSwitch;
