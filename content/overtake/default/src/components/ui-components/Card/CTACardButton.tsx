import CardBox from 'src/components/shared/CardBox';
import CTACardbutton from './Code/CTACardButtonCode';
import CTACardbuttonCode from './Code/CTACardButtonCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const CTACardButton = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Card With CTA Button</h4>
            <CTACardbutton />
          </div>
          <CodeDialog>{CTACardbuttonCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default CTACardButton;
