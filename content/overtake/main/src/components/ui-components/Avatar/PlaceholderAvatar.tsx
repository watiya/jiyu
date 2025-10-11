import CardBox from 'src/components/shared/CardBox';
import Placeholderavatar from './Code/PlaceholderAvatarCode';
import PlaceholderavatarCode from './Code/PlaceholderAvatarCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const PlaceholderAvatar = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Placeholder Avatar</h4>
            <Placeholderavatar />
          </div>
          <CodeDialog>{PlaceholderavatarCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PlaceholderAvatar;
