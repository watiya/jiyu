import { Avatar } from 'flowbite-react';
import user2 from '/src/assets/images/profile/user-2.jpg';
import user3 from '/src/assets/images/profile/user-3.jpg';

const DefaultAvatarCode = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Avatar img={user2} rounded />
        <Avatar img={user3} />
      </div>
    </div>
  );
};

export default DefaultAvatarCode;
