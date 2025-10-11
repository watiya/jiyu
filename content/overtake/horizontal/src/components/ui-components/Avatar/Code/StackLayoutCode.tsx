import { Avatar, AvatarGroup } from 'flowbite-react';
import user2 from '/src/assets/images/profile/user-2.jpg';
import user3 from '/src/assets/images/profile/user-3.jpg';
import user4 from '/src/assets/images/profile/user-4.jpg';
import user5 from '/src/assets/images/profile/user-5.jpg';
import user6 from '/src/assets/images/profile/user-6.jpg';

const StackLayoutCode = () => {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-5">
        <AvatarGroup>
          <Avatar img={user2} rounded stacked />
          <Avatar img={user3} rounded stacked />
          <Avatar img={user4} rounded stacked />
          <Avatar img={user5} rounded stacked />
          <Avatar img={user6} rounded stacked />
        </AvatarGroup>
        <AvatarGroup>
          <Avatar img={user2} rounded stacked />
          <Avatar img={user3} rounded stacked />
          <Avatar img={user4} rounded stacked />
          <Avatar img={user5} rounded stacked />
        </AvatarGroup>
      </div>
    </div>
  );
};

export default StackLayoutCode;
