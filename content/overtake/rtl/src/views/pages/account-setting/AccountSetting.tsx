import AccountSettingIndex from "src/components/theme-pages/account-settings";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Account Setting",
  },
];
const Accountsettings = () => {
  return (
    <>
      <BreadcrumbComp title="Account Setting" items={BCrumb} />
      <AccountSettingIndex />
    </>
  );
};

export default Accountsettings;
