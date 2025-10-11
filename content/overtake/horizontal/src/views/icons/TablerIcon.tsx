import CardBox from "src/components/shared/CardBox";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Tabler Icons",
  },
];
const TablerIcon = () => {
  return (
    <>
      <BreadcrumbComp title="Tabler Icons" items={BCrumb} />
      <CardBox>
        <iframe
          src="https://tabler-icons.io/"
          title="Inline Frame Example"
          width="100%"
          height="650"
        ></iframe>
      </CardBox>
    </>
  );
};

export default TablerIcon;
