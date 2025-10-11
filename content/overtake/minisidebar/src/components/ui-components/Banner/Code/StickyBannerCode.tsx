import { Banner, BannerCollapseButton } from 'flowbite-react';
import { MdAnnouncement } from 'react-icons/md';
import { HiX } from 'react-icons/hi';

const StickyBannerCode = () => {
  return (
    <>
      <div>
        <Banner>
          <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700 rounded-md">
            <div className="mx-auto flex items-center">
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <MdAnnouncement className="mr-4 h-4 w-4" />
                <span className="[&_p]:inline">
                  New brand identity has been launched for the&nbsp;
                  <a
                    href="/"
                    className="inline font-medium text-primary underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary"
                  >
                    matdashIM
                  </a>
                </span>
              </p>
            </div>
            <BannerCollapseButton
              color="gray"
              className="border-0 bg-transparent text-gray-500 dark:text-gray-400 hover:bg-lighthover dark:hover:bg-darkmuted ms-2"
            >
              <HiX className="h-4 w-4" />
            </BannerCollapseButton>
          </div>
        </Banner>
      </div>
    </>
  );
};

export default StickyBannerCode;
