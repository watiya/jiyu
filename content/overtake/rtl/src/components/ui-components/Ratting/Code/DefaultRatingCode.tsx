import { Rating, RatingStar } from 'flowbite-react';

const DefaultRatingCode = () => {
  return (
    <>
      <div>
        <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
        </Rating>
      </div>
    </>
  );
};

export default DefaultRatingCode;
