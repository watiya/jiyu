import BackgroundBread from 'src/components/ui-components/Breadcrumb/BackgroundBread';
import Default from 'src/components/ui-components/Breadcrumb/Default';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Breadcrumb',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'icon',
    description: 'An optional icon to display alongside the breadcrumb item.',
    type: `'HiHome'`,
    default: '-',
  },
];

const FlowbiteBreadcrumb = () => {
  return (
    <>
      <BreadcrumbComp title="Breadcrumb" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default  */}
        <div className="col-span-12">
          <Default />
        </div>
        {/* background color  */}
        <div className="col-span-12">
          <BackgroundBread />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Breadcrumb" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteBreadcrumb;
