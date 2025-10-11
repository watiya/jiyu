import DefaultToast from 'src/components/ui-components/Toast/DefaultToast';
import DismissalToast from 'src/components/ui-components/Toast/DismissalToast';
import FeedbackToast from 'src/components/ui-components/Toast/FeedbackToast';
import InteractiveToast from 'src/components/ui-components/Toast/InteractiveToast';
import ToastColors from 'src/components/ui-components/Toast/ToastColors';
import TostWithButton from 'src/components/ui-components/Toast/TostWithIButton';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Toast',
  },
];

const FlowbiteToast = () => {
  return (
    <>
      <BreadcrumbComp title="Toast" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultToast />
        </div>
        {/* Toast With Button */}
        <div className="col-span-12">
          <TostWithButton />
        </div>
        {/* Interactive Toast */}
        <div className="col-span-12">
          <InteractiveToast />
        </div>
        {/* ToastColors */}
        <div className="col-span-12">
          <ToastColors />
        </div>
        {/* Feedback Toast */}
        <div className="col-span-12">
          <FeedbackToast />
        </div>
        {/* Dismissal Toast*/}
        <div className="col-span-12">
          <DismissalToast />
        </div>
      </div>
    </>
  );
};

export default FlowbiteToast;
