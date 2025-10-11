import BasicListbox from 'src/components/headless-form/Listbox/BasicListbox';
import DisableListBox from 'src/components/headless-form/Listbox/DisableListbox';
import DisableListAll from 'src/components/headless-form/Listbox/DisableListBoxAll';
import HorizontalListBox from 'src/components/headless-form/Listbox/HorizontalListBox';
import LabelListbox from 'src/components/headless-form/Listbox/LabelListbox';
import ListboxFramerMotion from 'src/components/headless-form/Listbox/ListboxFramerMotion';
import TransitionListBox from 'src/components/headless-form/Listbox/ListboxTransition';
import ListBoxWidth from 'src/components/headless-form/Listbox/ListboxWidth';
import ListboxWithDescription from 'src/components/headless-form/Listbox/ListboxWithDescription';
import ListBoxWithHtmlForm from 'src/components/headless-form/Listbox/ListBoxWithHtmlForm';
import ListboxWithMultipleVal from 'src/components/headless-form/Listbox/ListboxWithMultipleVal';
import RenderingAsDiffElemtns from 'src/components/headless-form/Listbox/RenderingAsDiffElemtns';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Listbox',
  },
];

const HeadlessListbox = () => {
  return (
    <>
      <BreadcrumbComp title="Listbox" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicListbox />
        </div>
        <div className="col-span-12">
          <LabelListbox />
        </div>
        <div className="col-span-12">
          <DisableListAll />
        </div>
        <div className="col-span-12">
          <DisableListBox />
        </div>
        <div className="col-span-12">
          <ListboxWithDescription />
        </div>
        <div className="col-span-12">
          <ListBoxWithHtmlForm />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <ListBoxWidth />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <HorizontalListBox />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <TransitionListBox />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <ListboxFramerMotion />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <ListboxWithMultipleVal />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <RenderingAsDiffElemtns />
        </div>
      </div>
    </>
  );
};

export default HeadlessListbox;
