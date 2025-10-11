import ColorOptions from 'src/components/ui-components/ButtonGroup/ColorOptions';
import DefaultGroup from 'src/components/ui-components/ButtonGroup/DefaultGroup';
import GroupWithIcon from 'src/components/ui-components/ButtonGroup/GroupWithIcon';
import OutlineButtonGroup from 'src/components/ui-components/ButtonGroup/OutlineButtonGroup';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Button Group',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'outline',
    description: 'Making buttons border-only with transparent backgrounds.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'color',
    description: 'Specifies the color scheme of the buttons within the group.',
    type: `'primary' | 'secondary' | 'success' | 'warning'`,
    default: 'Default',
  },
];

const page = () => {
  return (
    <>
      <BreadcrumbComp title="Button Group" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultGroup />
        </div>
        {/* Outline Button Group */}
        <div className="col-span-12">
          <OutlineButtonGroup />
        </div>
        {/* Color Options */}
        <div className="col-span-12">
          <ColorOptions />
        </div>
        {/* Group With Icon */}
        <div className="col-span-12">
          <GroupWithIcon />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Button Group" />
        </div>
      </div>
    </>
  );
};

export default page;
