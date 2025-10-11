import BadgeSizes from 'src/components/ui-components/Badge/BadgeSizes';
import BadgesWithIconText from 'src/components/ui-components/Badge/BadgesWithIconText';
import Default from 'src/components/ui-components/Badge/Default';
import IconBadge from 'src/components/ui-components/Badge/IconBadge';
import LightBadges from 'src/components/ui-components/Badge/LightBadges';
import LinkBadges from 'src/components/ui-components/Badge/LinkBadges';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Badges',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'color',
    description: 'Sets the color of the badge.',
    type: `"primary" | "success" | "danger" | "warning"`,
    default: `"default"`,
  },
  {
    id: '2',
    prop: 'icon',
    description: 'Adds an icon component inside the badge, usually displayed before the text.',
    type: `"HiCheck" | "HiOutlineExclamation"`,
    default: '-',
  },
  {
    id: '3',
    prop: 'size',
    description: 'Controls the size of the badge including icon and text.',
    type: `"xs" | "sm"`,
    default: `"sm"`,
  },
];

const FlowbiteBadge = () => {
  return (
    <>
      <BreadcrumbComp title="Badges" items={BCrumb} />

      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <Default />
        </div>
        {/* Light */}
        <div className="col-span-12">
          <LightBadges />
        </div>
        {/* Link */}
        <div className="col-span-12">
          <LinkBadges />
        </div>
        {/* Icon & Text */}
        <div className="col-span-12">
          <BadgesWithIconText />
        </div>
        {/* Icon*/}
        <div className="col-span-12">
          <IconBadge />
        </div>
        {/* Sizes*/}
        <div className="col-span-12">
          <BadgeSizes />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Badge" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteBadge;
