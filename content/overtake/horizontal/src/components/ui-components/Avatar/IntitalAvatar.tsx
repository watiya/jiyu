import CardBox from 'src/components/shared/CardBox';
import Intitalavatar from './Code/IntitalAvatarCode';
import IntitalavatarCode from './Code/IntitalAvatarCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const IntitalAvatar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Placeholder Initials</h4>
            <Intitalavatar />
          </div>
          <CodeDialog>{IntitalavatarCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default IntitalAvatar;
