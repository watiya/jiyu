import CardBox from 'src/components/shared/CardBox';
import Basicselect from './Code/BasicSelectCode';
import BasicselectCode from './Code/BasicSelectCode.tsx?raw';
import CodeDialog from 'src/components/ui-components/CodeDialog';

const BasicSelect = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Basic Select</h4>
          <Basicselect />
        </div>
        <CodeDialog>{BasicselectCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default BasicSelect;
