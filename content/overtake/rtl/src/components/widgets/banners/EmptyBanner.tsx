
import CardBox from "src/components/shared/CardBox";
import Banner from "/src/assets/images/products/empty-shopping-bag.gif";
import { Button } from "flowbite-react";
const EmptyBanner = () => {
  return (
    <>
      <CardBox>
        <img src={Banner} alt="banner" className="mx-auto  w-[156px]" />
        <div className="text-center mx-auto">
          <h5 className="text-lg">Oop, Your cart is empty!</h5>
          <p className="text-bodytext mt-2">
          Get back to shopping and get rewards from it.
          </p>
          <div className="flex justify-center mt-5">
            <Button color={"primary"}>Go for shopping</Button>
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default EmptyBanner;
