import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import HoverTables from '../../components/tables/hover'

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Hover Table",
  },
];

const hoverTable = () => {

  return (
    <>
      <BreadcrumbComp title="Hover Table" items={BCrumb} />
      <HoverTables />
    </>
  );
};

export default hoverTable;
