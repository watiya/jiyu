import DefaultPagination from 'src/components/ui-components/Pagination/DefaultPagination';
import PaginationControl from 'src/components/ui-components/Pagination/PaginationControl';
import PaginationWithIcon from 'src/components/ui-components/Pagination/PaginationWithIcon';
import PrevNextPagiantion from 'src/components/ui-components/Pagination/PrevNextPagiantion';
import PrevNextPagiantionIcon from 'src/components/ui-components/Pagination/PrevNextPagiantionIcon';
import TableDataPaginationIcon from 'src/components/ui-components/Pagination/TableDataPaginationIcon';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Pagination',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'currentPage',
    description: 'The current active page.',
    type: 'number',
    default: '1',
  },
  {
    id: '2',
    prop: 'totalPages',
    description: 'The total number of pages.',
    type: 'number',
    default: '1',
  },
  {
    id: '3',
    prop: 'showIcons',
    description: 'If `true`, next and previous buttons will be shown with icons.',
    type: 'boolean',
    default: 'false',
  },
  {
    id: '4',
    prop: 'layout',
    description: 'The layout style of the pagination.',
    type: "'pagination' | 'navigation' | 'table'",
    default: "'pagination'",
  },
  {
    id: '5',
    prop: 'previousLabel',
    description: 'Label for the previous button.',
    type: `'Previous' | 'Go back' | '<' | '‹'`,
    default: `'Previous'`,
  },
  {
    id: '6',
    prop: 'nextLabel',
    description: 'Label for the next button.',
    type: `'Next' | 'Go forward' | '>' | '›'`,
    default: `'Next'`,
  },
];

const FlowbitePagination = () => {
  return (
    <>
      <BreadcrumbComp title="Pagination" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultPagination />
        </div>
        {/* With Icons */}
        <div className="col-span-12">
          <PaginationWithIcon />
        </div>
        {/* Prev Next Pagiantion */}
        <div className="col-span-12">
          <PrevNextPagiantion />
        </div>
        {/* Prev Next Pagiantion Icon */}
        <div className="col-span-12">
          <PrevNextPagiantionIcon />
        </div>
        {/* Table Data PaginationIcon */}
        <div className="col-span-12">
          <TableDataPaginationIcon />
        </div>
        {/* Table Data PaginationIcon */}
        <div className="col-span-12">
          <PaginationControl />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Pagination" />
        </div>
      </div>
    </>
  );
};

export default FlowbitePagination;
