import CTANav from 'src/components/ui-components/Navbar/CTANav';
import DefaultNav from 'src/components/ui-components/Navbar/DefaultNav';
import NavWithDropdown from 'src/components/ui-components/Navbar/NavWithDropdown';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Navbar',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'fluid',
    description: 'If true, the navbar spans the full width of the screen.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'rounded',
    description: 'Applies rounded corners to the navbar.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '3',
    prop: 'href',
    description: 'Destination URL of the link.',
    type: 'string',
    default: '-',
  },
  {
    id: '4',
    prop: 'active',
    description: 'Marks the link as active (highlighted).',
    type: 'boolean',
    default: 'false',
  },
];

const FlowbiteNavbar = () => {
  return (
    <>
      <BreadcrumbComp title="Navbar" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default Navbar*/}
        <div className="col-span-12">
          <DefaultNav />
        </div>
        {/* CTA Navbar */}
        <div className="col-span-12">
          <CTANav />
        </div>
        {/* Nav With Dropdown */}
        <div className="col-span-12">
          <NavWithDropdown />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Navbar" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteNavbar;
