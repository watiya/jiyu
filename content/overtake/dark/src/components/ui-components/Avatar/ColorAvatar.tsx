import CardBox from 'src/components/shared/CardBox';
import Coloravatar from './Code/ColorAvatarCode';
import ColoravatarCode from './Code/ColorAvatarCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const ColorAvatar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Colors</h4>
            <Coloravatar />
          </div>
          <CodeDialog>{ColoravatarCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ColorAvatar;
