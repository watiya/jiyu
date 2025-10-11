
import TitleToast from "src/components/shadcn-ui/Toast/TitleToast";
import ActionToast from "src/components/shadcn-ui/Toast/ActionToast";
import DestructiveToast from "src/components/shadcn-ui/Toast/DestructiveToast";
import PrimaryToast from "src/components/shadcn-ui/Toast/PrimaryToast";
import SecondaryToast from "src/components/shadcn-ui/Toast/SecondaryToast";
import WarningToast from "src/components/shadcn-ui/Toast/WarningToast";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Toast",
  },
];
const ShadcnToast = () => {
  return (
    <>
      <BreadcrumbComp title="Toast" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
            <TitleToast/>
        </div>
        <div className="col-span-12">
            <ActionToast/>
        </div>
        <div className="col-span-12">
            <DestructiveToast/>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <PrimaryToast/>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <SecondaryToast/>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12">
          <WarningToast/>
        </div>
      </div>
    </>
  );
};

export default ShadcnToast;
