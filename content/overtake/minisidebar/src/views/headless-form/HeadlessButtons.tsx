import BasicButtons from "src/components/headless-form/Button/BasicButtons";
import DisableButton from "src/components/headless-form/Button/DisableButton";
import DisableOutlineButtons from "src/components/headless-form/Button/DisableOutlineButtons";
import LightButtons from "src/components/headless-form/Button/LightButtons";
import RoundedOutlineBtn from "src/components/headless-form/Button/RoundedOutlineBtn";
import SquareOutlineBtn from "src/components/headless-form/Button/SquareOutlineBtn";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Button",
    },
  ];

const HeadlessButtons = () => {
  return (
    <>
      <BreadcrumbComp title="Button" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicButtons />
        </div>
        <div className="col-span-12">
          <LightButtons />
        </div>
        <div className="col-span-12">
          <RoundedOutlineBtn />
        </div>
        <div className="col-span-12">
          <SquareOutlineBtn />
        </div>
        <div className="col-span-12">
          <DisableButton />
        </div>
        <div className="col-span-12">
          <DisableOutlineButtons />
        </div>
      </div>
    </>
  )
}

export default HeadlessButtons