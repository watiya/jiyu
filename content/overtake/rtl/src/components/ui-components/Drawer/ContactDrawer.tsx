import CardBox from 'src/components/shared/CardBox';
import Contactdrawer from './Code/ContactDrawerCode';
import ContactdrawerCode from './Code/ContactDrawerCode.tsx?raw';
import CodeDialog from '../CodeDialog';
const ContactDrawer = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Contact Form</h4>
            <Contactdrawer />
          </div>
          <CodeDialog>{ContactdrawerCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ContactDrawer;
