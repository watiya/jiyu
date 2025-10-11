import StripedRow from "src/components/tables/striped-row";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Striped Row Table",
  },
];

const StrippedTable = () => {
  return (
    <>
      <BreadcrumbComp title="Striped Row Table" items={BCrumb} />
      <StripedRow />
    </>
  );
};

export default StrippedTable;
