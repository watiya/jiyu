import { Rating, RatingStar } from 'flowbite-react';

const WithTextRatingsCode = () => {
  return (
    <>
      <div>
        <Rating>
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
        </Rating>
      </div>
    </>
  );
};

export default WithTextRatingsCode;
