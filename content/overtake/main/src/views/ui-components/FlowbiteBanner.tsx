import BottomBanner from 'src/components/ui-components/Banner/BottomBanner';
import CTABanner from 'src/components/ui-components/Banner/CTABanner';
import InformationalBanner from 'src/components/ui-components/Banner/InformationalBanner';
import NewsletterBanner from 'src/components/ui-components/Banner/NewsletterBanner';
import StickyBanner from 'src/components/ui-components/Banner/StickyBanner';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Banner',
  },
];

const FlowbiteBanner = () => {
  return (
    <>
      <BreadcrumbComp title="Banner" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Sticky Banner */}
        <div className="col-span-12">
          <StickyBanner />
        </div>
        {/* Bottom Banner */}
        <div className="col-span-12">
          <BottomBanner />
        </div>
        {/* CTA Banner */}
        <div className="col-span-12">
          <CTABanner />
        </div>
        {/* Newsletter Banner */}
        <div className="col-span-12">
          <NewsletterBanner />
        </div>
        {/* Informational Banner */}
        <div className="col-span-12">
          <InformationalBanner />
        </div>
      </div>
    </>
  );
};

export default FlowbiteBanner;
