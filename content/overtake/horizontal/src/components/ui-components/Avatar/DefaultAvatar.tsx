import CardBox from 'src/components/shared/CardBox';
import Defaultavatar from './Code/DefaultAvatarCode';
import DefaultavatarCode from './Code/DefaultAvatarCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const DefaultAvatar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default Avatar</h4>
            <Defaultavatar />
          </div>
          <CodeDialog>{DefaultavatarCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultAvatar;
