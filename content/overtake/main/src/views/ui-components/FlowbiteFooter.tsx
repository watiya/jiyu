import DefaultFooter from 'src/components/ui-components/Footer/DefaultFooter';
import FooterWithLogo from 'src/components/ui-components/Footer/FooterWithLogo';
import SitemapLinkFooter from 'src/components/ui-components/Footer/SitemapLinkFooter';
import SocialFooter from 'src/components/ui-components/Footer/SocialFooter';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Footer',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'href',
    description: 'URL the link should navigate to.',
    type: `'http://localhost:5173'`,
    default: '-',
  },
  {
    id: '2',
    prop: 'src',
    description: 'Image source for the brand logo.',
    type: `'https://flowbite.com/images/logo.svg'`,
    default: '-',
  },
  {
    id: '3',
    prop: 'alt',
    description: 'Alternative text for the logo image.',
    type: `'flowbite'`,
    default: '-',
  },
  {
    id: '4',
    prop: 'icon',
    description: 'React icon component (e.g., from react-icons).',
    type: `'BsFacebook' | 'BsInstagram'`,
    default: '-',
  },
  {
    id: '5',
    prop: 'by',
    description: 'Name of the entity being credited.',
    type: `'Flowbite'`,
    default: '-',
  },
  {
    id: '6',
    prop: 'year',
    description: 'Year displayed in the copyright.',
    type: '2022',
    default: 'new Date().getFullYear()',
  },
];

const FlowbiteFooter = () => {
  return (
    <>
      <BreadcrumbComp title="Footer" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultFooter />
        </div>
        {/* Footer With Logo */}
        <div className="col-span-12">
          <FooterWithLogo />
        </div>
        {/* Social Footer */}
        <div className="col-span-12">
          <SocialFooter />
        </div>
        {/* Sitemap Link Footer */}
        <div className="col-span-12">
          <SitemapLinkFooter />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Footer" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteFooter;
