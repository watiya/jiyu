import { Avatar } from 'flowbite-react';
import user2 from '/src/assets/images/profile/user-2.jpg';
import user3 from '/src/assets/images/profile/user-3.jpg';

const BorderAvatarCode = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Avatar img={user2} rounded bordered />
        <Avatar img={user3} bordered />
      </div>
    </div>
  );
};

export default BorderAvatarCode;
