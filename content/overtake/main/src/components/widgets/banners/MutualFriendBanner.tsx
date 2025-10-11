
import CardBox from "src/components/shared/CardBox";
import Banner from "/src/assets/images/profile/user-3.jpg";
import { Button } from "flowbite-react";
const MutualBanner = () => {
  return (
    <>
      <CardBox className="mt-[30px] text-center">
        <h5 className="text-lg mb-4">Mutual Friend Revealed</h5>
        <div className="relative w-auto mx-auto">
          <img
            src={Banner}
            alt="banner"
            className="mx-auto  w-[158px] rounded-full"
          />
          <span className="rounded-full absolute end-3 top-[5px] bg-error text-[10px] h-5 w-5 flex justify-center items-center text-white">
            1
          </span>
        </div>

        <div className="mx-auto mt-4">
          <h5 className="text-lg">Tommoie Henderson</h5>
          <p className="text-bodytext mt-2 md:px-12">
            Accept the request and type a message
          </p>
          <div className="flex justify-center gap-3 mt-4">
            <Button color={"primary"}>Accept</Button>
            <Button color={"lighterror"}>Remove</Button>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default MutualBanner;
