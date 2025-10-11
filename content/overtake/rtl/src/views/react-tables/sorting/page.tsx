import SortingTable from "src/components/react-tables/sorting/page";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Sorting Table",
  },
];
function page() {
  return (
    <>
      <BreadcrumbComp title="Sorting Table" items={BCrumb} />
      <SortingTable />
    </>
  );
}

export default page;
