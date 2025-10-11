import { Avatar } from 'flowbite-react';

const IntitalAvatarCode = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Avatar placeholderInitials="RR" />
        <Avatar placeholderInitials="RR" rounded />
      </div>
    </div>
  );
};

export default IntitalAvatarCode;
