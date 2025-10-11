import ActiveOptionDetails from 'src/components/headless-form/Combobox/AcrtiveOptionDetails';
import AllowCustomVal from 'src/components/headless-form/Combobox/AllowCustomVal';
import BasicComobobox from 'src/components/headless-form/Combobox/BasicComobobox';
import BindingStringAsValue from 'src/components/headless-form/Combobox/BindingStringAsValue';
import BindingValues from 'src/components/headless-form/Combobox/BindingValues';
import ComboOnFocus from 'src/components/headless-form/Combobox/ComboOnFocus';
import ComboPosition from 'src/components/headless-form/Combobox/ComboPosition';
import ComboWidth from 'src/components/headless-form/Combobox/ComboWidth';
import DisableCombo from 'src/components/headless-form/Combobox/Disable';
import DisableComboOption from 'src/components/headless-form/Combobox/DisableComboOption';
import MultipleSelectVal from 'src/components/headless-form/Combobox/MultipleSelectVal';
import RenderingCombobox from 'src/components/headless-form/Combobox/RenderAsDiffElements';
import VirtualScrollingCombo from 'src/components/headless-form/Combobox/VirtualScroll';
import WithFramerMotion from 'src/components/headless-form/Combobox/WithFramerMotion';
import WithLabel from 'src/components/headless-form/Combobox/WithLabel';
import WithTransitions from 'src/components/headless-form/Combobox/WithTransitions';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const HeadlessCombobox = () => {
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Combobox',
    },
  ];
  return (
    <>
      <BreadcrumbComp title="Combobox" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicComobobox />
        </div>
        <div className="col-span-12">
          <WithLabel />
        </div>
        <div className="col-span-12">
          <DisableCombo />
        </div>
        <div className="col-span-12">
          <DisableComboOption />
        </div>
        <div className="col-span-12">
          <AllowCustomVal />
        </div>
        <div className="col-span-12">
          <ComboPosition />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <ComboWidth />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <WithTransitions />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <WithFramerMotion />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <BindingStringAsValue />
        </div>

        <div className="lg:col-span-6 col-span-12">
          <ComboOnFocus />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <RenderingCombobox />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <BindingValues />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <ActiveOptionDetails />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <VirtualScrollingCombo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <MultipleSelectVal />
        </div>
      </div>
    </>
  );
};

export default HeadlessCombobox;
