import DefaultTimeline from 'src/components/ui-components/Timeline/DefaultTimeline';
import HorizontalTimeline from 'src/components/ui-components/Timeline/HorizontalTimeline';
import VerticalTimeline from 'src/components/ui-components/Timeline/VerticalTimeline';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ComponentApi from 'src/components/ui-components/ComponentApi';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Timeline',
  },
];

const allApis = [
  {
    id: '1',
    prop: 'horizontal',
    description: 'Arranges the timeline items in a horizontal layout.',
    type: 'boolean',
    default: 'false',
  },
];

const FlowbiteTimeline = () => {
  return (
    <>
      <BreadcrumbComp title="Timeline" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className=" col-span-12">
          <DefaultTimeline />
        </div>
        {/* Vertical Timeline */}
        <div className=" col-span-12">
          <VerticalTimeline />
        </div>
        {/* Horizontal Timeline */}
        <div className=" col-span-12">
          <HorizontalTimeline />
        </div>
        {/* Api */}
        <div className="col-span-12">
          <ComponentApi allApis={allApis} componentName="Timeline" />
        </div>
      </div>
    </>
  );
};

export default FlowbiteTimeline;
