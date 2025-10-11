import DownloaadBanner from "src/components/widgets/banners/DownloadBanner";
import EmptyBanner from "src/components/widgets/banners/EmptyBanner";
import ErroreBanner from "src/components/widgets/banners/ErroreBanner";
import MutualBanner from "src/components/widgets/banners/MutualFriendBanner";
import NotificationBanner from "src/components/widgets/banners/NotificationBanner";
import WelcomeBanner from "src/components/widgets/banners/WelcomeBanner";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Banner',
  },
];

const WidgetBanners = () => {
  return (
    <>
      <BreadcrumbComp title="Banners" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px] ">
        <div className="lg:col-span-8 col-span-12">
          <WelcomeBanner />
          <DownloaadBanner />
          <div className="grid grid-cols-12 gap-[30px] mt-[30px]">
            <div className="md:col-span-6 col-span-12">
              <ErroreBanner />
            </div>
            <div className="md:col-span-6 col-span-12">
              <EmptyBanner />
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <NotificationBanner />
          <MutualBanner />
        </div>
      </div>
    </>
  );
};

export default WidgetBanners;
