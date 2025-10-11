
import CardBox from "src/components/shared/CardBox";
import { Banner, BannerCollapseButton, Button } from "flowbite-react";
import { HiX } from "react-icons/hi";
import FullLogo from "src/layouts/full/shared/logo/FullLogo";
const CTABanner = () => {
  return (
    <div>
      <CardBox>
        <h4 className="text-lg font-semibold mb-2">Marketing CTA banner</h4>
        <Banner>
          <div className="flex w-[calc(100%-2rem)] flex-col justify-between rounded-md border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-700 md:flex-row lg:max-w-7xl">
            <div className="mb-3 mr-4 flex flex-col gap-7 items-start md:mb-0 md:flex-row md:items-center">
              <FullLogo />
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                Build websites even faster with components on top of Tailwind
                CSS
              </p>
            </div>
            <div className="flex shrink-0 items-center">
              <Button href="#" color="primary">
                Sign up
              </Button>
              <BannerCollapseButton
                color="gray"
                className="border-0 bg-transparent text-gray-500 dark:text-gray-400 hover:bg-lighthover dark:hover:bg-darkmuted ms-3"
              >
                <HiX className="h-4 w-4" />
              </BannerCollapseButton>
            </div>
          </div>
        </Banner>
      </CardBox>
    </div>
  );
};

export default CTABanner;
