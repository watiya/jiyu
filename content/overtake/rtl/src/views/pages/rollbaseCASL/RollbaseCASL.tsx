import RollBaseIndex from "src/components/theme-pages/casl";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "CASL",
  },
];


const RollBase = () => {

  return (
    <>
      <BreadcrumbComp title="Rollbase Access" items={BCrumb} />
      <RollBaseIndex/>
    </>
  );
};

export default RollBase;
