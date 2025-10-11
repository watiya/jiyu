
import { Button } from "flowbite-react";
import Banner from "/src/assets/images/backgrounds/welcome-bg2.png";
import CardBox from "src/components/shared/CardBox";

const WelcomeBanner = () => {
  return (
    <>
      <CardBox className="bg-primary-gt shadow-none pb-0 pe-0">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="md:col-span-6 col-span-12">
            <h5 className="text-lg text-white mt-2">Welcome back David!</h5>
            <p className="text-white opacity-75 text-sm font-medium py-5">
              You have earned 54% more than last month which is great thing.
            </p>
            <Button color={'error'}>Check</Button>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src={Banner} alt="banner" className="ms-auto" />
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default WelcomeBanner;
