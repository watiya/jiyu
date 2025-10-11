
import { Rating, RatingStar } from "flowbite-react";

import CardBox from "src/components/shared/CardBox";

const StarRatting = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">Star sizing</h4>
        <div className="flex flex-col gap-2">
          <Rating>
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <Rating size="md">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <Rating size="lg">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <Rating size="lg">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <Rating size="lg">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <Rating size="lg">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
          <Rating size="lg">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar filled={false} />
          </Rating>
        </div>
      </CardBox>
    </div>
  );
};

export default StarRatting;
