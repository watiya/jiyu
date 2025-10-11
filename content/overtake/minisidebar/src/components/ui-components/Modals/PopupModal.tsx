import CardBox from 'src/components/shared/CardBox';
import Popupmodal from './Code/PopupModalCode';
import PopupmodalCode from './Code/PopupModalCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PopupModal = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Pop-up Modal</h4>
            <Popupmodal />
          </div>
          <CodeDialog>{PopupmodalCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PopupModal;
