import { Banner, Label, TextInput, Button, BannerCollapseButton } from 'flowbite-react';
import { HiX } from 'react-icons/hi';

const NewsletterBannerCode = () => {
  return (
    <>
      <div>
        <Banner>
          <div className="flex w-full items-center justify-between rounded-md border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
            <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
              <form action="#" className="flex w-full flex-col items-center md:flex-row md:gap-x-3">
                <Label
                  htmlFor="email"
                  className="mb-2 mr-auto shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
                >
                  Sign up for our newsletter
                </Label>
                <TextInput id="email" placeholder="Enter your email" required type="email" />
                <Button type="submit" color="primary">
                  Subscribe
                </Button>
              </form>
            </div>
            <BannerCollapseButton
              color="gray"
              className="border-0 bg-transparent text-gray-500 dark:text-gray-400 hover:bg-lighthover dark:hover:bg-darkmuted"
            >
              <HiX className="h-4 w-4" />
            </BannerCollapseButton>
          </div>
        </Banner>
      </div>
    </>
  );
};

export default NewsletterBannerCode;
