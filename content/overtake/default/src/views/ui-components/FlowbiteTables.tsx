import DefaultTable from 'src/components/ui-components/Table/DefaultTable';
import StrippedTable from 'src/components/ui-components/Table/StrippedTable';
import TableHover from 'src/components/ui-components/Table/TableHover';
import TableWithCheckbox from 'src/components/ui-components/Table/TableWithCheckbox';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Tables',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'hoverable',
    description: 'Enables hover effect on table rows.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '2',
    prop: 'striped',
    description: 'Adds zebra-striping to rows within the table body.',
    type: 'boolean',
    default: 'false',
  },
];

const FlowbiteTables = () => {
  return (
    <>
      <BreadcrumbComp title="Tables" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultTable />
        </div>
        {/* Stripped Table */}
        <div className="col-span-12">
          <StrippedTable />
        </div>
        {/* Table Hover */}
        <div className="col-span-12">
          <TableHover />
        </div>
        {/* Table With Checkbox */}
        <div className="col-span-12">
          <TableWithCheckbox />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Tables" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteTables;
