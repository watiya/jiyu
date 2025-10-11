import CardBox from 'src/components/shared/CardBox';
import Formdrawer from './Code/FormDrawerCode';
import FormdrawerCode from './Code/FormDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';
const FormDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Form Drawer</h4>
            <Formdrawer />
          </div>
          <CodeDialog>{FormdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FormDrawer;
