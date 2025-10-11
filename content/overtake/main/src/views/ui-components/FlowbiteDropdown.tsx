import DropDownHeader from 'src/components/ui-components/Dropdown/DropdownHeader';
import DropdownPalcements from 'src/components/ui-components/Dropdown/DropdownPlacements';
import DropDownSize from 'src/components/ui-components/Dropdown/DropDownSize';
import DropdownWithIcon from 'src/components/ui-components/Dropdown/DropdownWithIcon';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Dropdown',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'label',
    description: 'Sets the text label for the dropdown trigger.',
    type: 'string',
    default: '-',
  },
  {
    id: '2',
    prop: 'size',
    description: 'Controls the size of the dropdown.',
    type: `"sm" | "md" | "lg"`,
    default: `"md"`,
  },
  {
    id: '3',
    prop: 'placement',
    description: 'Sets the placement of the dropdown relative to the trigger.',
    type: `"top" | "right" | "bottom" | "left"`,
    default: `"bottom"`,
  },
  {
    id: '4',
    prop: 'inline',
    description: 'Makes the dropdown appear inline with the trigger element.',
    type: 'boolean',
    default: `false`,
  },
];

const FlowbiteDropdown = () => {
  return (
    <>
      <BreadcrumbComp title="Dropdown" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default Drodown & Header Dropdown*/}
        <div className="col-span-12">
          <DropDownHeader />
        </div>
        {/* Drodown with icon*/}
        <div className="col-span-12">
          <DropdownWithIcon />
        </div>
        {/* Drodown sizes*/}
        <div className="col-span-12">
          <DropDownSize />
        </div>
        {/* Drodown Placement*/}
        <div className="col-span-12">
          <DropdownPalcements />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Dropdown" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteDropdown;
