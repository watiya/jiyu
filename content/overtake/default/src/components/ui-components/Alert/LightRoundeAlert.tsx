import CardBox from 'src/components/shared/CardBox';
import LightRounded from './Code/LightRoundedCode';
import LightRoundedCode from './Code/LightRoundedCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const LightRoundeAlert = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Light Rounded Alert</h4>
            <LightRounded />
          </div>
          <CodeDialog>{LightRoundedCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default LightRoundeAlert;
