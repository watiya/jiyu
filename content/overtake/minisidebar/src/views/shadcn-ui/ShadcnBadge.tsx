import DefaultBadge from 'src/components/shadcn-ui/Badge/DefaultBadge';
import OutlineBadge from 'src/components/shadcn-ui/Badge/OutlineBadge';
import LinkBadge from 'src/components/shadcn-ui/Badge/LinkBadge';
import BadgeWithIconText from 'src/components/shadcn-ui/Badge/BadgeWithIconText';
import Iconbadge from 'src/components/shadcn-ui/Badge/IconBadge';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Badge',
  },
];

const ShadcnBadge = () => {
  return (
    <>
      <BreadcrumbComp title="Badges" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Basic */}
        <div className="col-span-12">
          <DefaultBadge />
        </div>
        <div className="col-span-12">
          <OutlineBadge />
        </div>
        <div className="col-span-12">
          <LinkBadge />
        </div>
        <div className="col-span-12">
          <BadgeWithIconText />
        </div>
        <div className="col-span-12">
          <Iconbadge />
        </div>
      </div>
    </>
  );
};

export default ShadcnBadge;
