import { Avatar } from 'flowbite-react';
import user2 from '/src/assets/images/profile/user-2.jpg';
import user1 from '/src/assets/images/profile/user-1.jpg';

const ImageOverrideCode = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Avatar
          img={(props) => (
            <img
              alt=""
              height="48"
              referrerPolicy="no-referrer"
              src={user2}
              width="48"
              {...props}
            />
          )}
        />
        <Avatar
          img={(props) => (
            <picture>
              <source media="(min-width: 900px)" srcSet={user2} />
              <source media="(min-width: 480px)" srcSet={user1} />
              <img alt="" height="48" src={user1} width="48" {...props} />
            </picture>
          )}
        />
      </div>
    </div>
  );
};

export default ImageOverrideCode;
