import BlogCards from "src/components/widgets/cards/BlogCards";
import GiftCards from "src/components/widgets/cards/GiftCards";
import MusicCards from "src/components/widgets/cards/MusicCards";
import PaymentGateway from "src/components/widgets/cards/PaymentGatways";
import ProductsCards from "src/components/widgets/cards/ProductsCards";
import ProfileCards from "src/components/widgets/cards/ProfileCards";
import RecentTransactionCard from "src/components/widgets/cards/RecentTransactionCard";
import SettingsCard from "src/components/widgets/cards/SettingsCard";
import SocialCards from "src/components/widgets/cards/SocialCards";
import UpcommingActCard from "src/components/widgets/cards/UpcommingActivitiesCard";
import UserCards from "src/components/widgets/cards/UserCards";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Cards',
  },
];

const WidgetCards = () => {
  return (
    <>
      <BreadcrumbComp title="Cards" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-12">
          <BlogCards />
        </div>
        <div className="col-span-12">
          <ProductsCards />
        </div>
        <div className="col-span-12">
          <MusicCards />
        </div>
        <div className="col-span-12">
          <ProfileCards />
        </div>
        <div className="col-span-12">
          <UserCards />
        </div>
        <div className="col-span-12">
          <SocialCards />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <SettingsCard />
        </div>
        <div className="lg:col-span-8 col-span-12">
          <GiftCards />
        </div>
        <div className="lg:col-span-4 col-span-12">
          <PaymentGateway/>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <UpcommingActCard/>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <RecentTransactionCard/>
        </div>
      </div>
    </>
  );
};

export default WidgetCards;
