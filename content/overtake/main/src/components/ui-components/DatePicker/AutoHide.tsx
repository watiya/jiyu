import CardBox from 'src/components/shared/CardBox';
import Autohide from './Code/AutoHideCode';
import AutohideCode from './Code/AutoHideCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const AutoHide = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Autohide</h4>
            <Autohide />
          </div>
          <CodeDialog>{AutohideCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default AutoHide;
