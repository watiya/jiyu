import CardBox from 'src/components/shared/CardBox';
import Borderavatar from './Code/BorderAvatarCode';
import BorderavatarCode from './Code/BorderAvatarCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const BorderAvatar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Border Avatar</h4>
            <Borderavatar />
          </div>
          <CodeDialog>{BorderavatarCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BorderAvatar;
