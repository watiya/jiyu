import { Avatar } from 'flowbite-react';
import user2 from '/src/assets/images/profile/user-2.jpg';

const AvatarWithTextCode = () => {
  return (
    <>
      <div>
        <Avatar img={user2} rounded className='justify-start'>
          <div className="space-y-1 font-medium dark:text-white">
            <div className="text-ld">Jese Leos</div>
            <div className="text-sm text-darklink">Joined in August 2014</div>
          </div>
        </Avatar>
      </div>
    </>
  );
};

export default AvatarWithTextCode;
