import CardBox from 'src/components/shared/CardBox';
import UserProfilecard from './Code/UserProfileCardCode';
import UserProfilecardCode from './Code/UserProfileCardCode.tsx?raw';
import CodeDialog from '../CodeDialog';

const UserProfileCard = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">User Profile Card</h4>
            <UserProfilecard />
          </div>
          <CodeDialog>{UserProfilecardCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default UserProfileCard;
