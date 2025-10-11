import Questions from "src/components/theme-pages/faq/Questions";
import StillHaveQst from "src/components/theme-pages/faq/StillHaveQst";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "FAQ",
  },
];

const faq = () => {
  return (
    <>
      <BreadcrumbComp title="FAQ" items={BCrumb} />
      <Questions />
      <StillHaveQst />
    </>
  );
};

export default faq;
