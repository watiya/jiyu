import EmaiilApp from "src/components/apps/email";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Email",
  },
];
const Emaiil = () => {
  return (
    <>
      <BreadcrumbComp title="Email App" items={BCrumb} />
      <EmaiilApp />
    </>
  );
};
export default Emaiil;
