import BasicDialog from "src/components/headless-ui/Dialog/BasicDialog";
import DialogWithBackdrop from "src/components/headless-ui/Dialog/DialogWithBackdrop";
import FramerAnimationDialog from "src/components/headless-ui/Dialog/FramerAnimationDialog";
import ScrollableDialog from "src/components/headless-ui/Dialog/ScrollableDialog";
import TranstionDialog from "src/components/headless-ui/Dialog/TranstionDialog";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Dialog",
    },
  ];

const Dialog = () => {
  return (
    <>
      <BreadcrumbComp title="Dialog" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicDialog />
        </div>
        <div className="col-span-12">
          <DialogWithBackdrop />
        </div>
        <div className="col-span-12">
          <ScrollableDialog />
        </div>
        <div className="col-span-12">
          <TranstionDialog />
        </div>
        <div className="col-span-12">
          <FramerAnimationDialog />
        </div>
      </div>
    </>
  )
}

export default Dialog