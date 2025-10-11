import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import DenseTable from "src/components/react-tables/dense/page";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Dense Table ",
  },
];
function page() {
  return (
    <>
      <BreadcrumbComp title="Dense Table " items={BCrumb} />
      <DenseTable />
    </>
  );
}

export default page;
