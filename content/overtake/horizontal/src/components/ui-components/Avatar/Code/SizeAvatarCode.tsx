import { Avatar } from 'flowbite-react';
import user5 from '/src/assets/images/profile/user-5.jpg';

const SizeAvatarCode = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <Avatar img={user5} size="xs" />
        <Avatar img={user5} size="sm" />
        <Avatar img={user5} size="md" />
        <Avatar img={user5} size="lg" />
      </div>
    </div>
  );
};

export default SizeAvatarCode;
