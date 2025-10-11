
import CardBox from "src/components/shared/CardBox";
import Banner from "/src/assets/images/backgrounds/website-under-construction.svg";
import { Button } from "flowbite-react";
const ErroreBanner = () => {
  return (
    <>
      <CardBox>
        <img src={Banner} alt="banner" className="mx-auto  w-36" />
        <div className="text-center mx-auto">
          <h5 className="text-lg">Oops something went wrong!</h5>
          <p className="text-bodytext mt-2 md:px-12">
            Trying again to bypasses these temporary error.
          </p>
          <div className="flex justify-center mt-3">
            <Button color={"error"}>Retry</Button>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default ErroreBanner;
