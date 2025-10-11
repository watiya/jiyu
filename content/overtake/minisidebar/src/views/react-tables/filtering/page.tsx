import FilteringTable from "src/components/react-tables/filtering/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Filter Table",
  },
];
function page() {
  return (
    <>
      <BreadcrumbComp title="Filter Table " items={BCrumb} />

      <FilteringTable />
    </>
  );
}

export default page;
