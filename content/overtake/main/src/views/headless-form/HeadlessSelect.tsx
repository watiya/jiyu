import BasicSelect from 'src/components/headless-form/Select/BasicSelect';
import DisabledSelect from 'src/components/headless-form/Select/DisableSelect';
import WithDescriptionSelect from 'src/components/headless-form/Select/WithDescriptionSelect';
import WithLabelSelect from 'src/components/headless-form/Select/WithLabelSelect';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const HeadlessSelect = () => {
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Select',
    },
  ];
  return (
    <>
      <BreadcrumbComp title="Select" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicSelect />
        </div>
        <div className="col-span-12">
          <WithLabelSelect />
        </div>
        <div className="col-span-12">
          <WithDescriptionSelect />
        </div>
        <div className="col-span-12">
          <DisabledSelect />
        </div>
      </div>
    </>
  );
};

export default HeadlessSelect;
