import BasicTextarea from 'src/components/headless-form/Textarea/BasicTextarea';
import DisableTextarea from 'src/components/headless-form/Textarea/DisableTextArea';
import WithDescriptionTextarea from 'src/components/headless-form/Textarea/WithDescriptionTextarea';
import WithLabelTextarea from 'src/components/headless-form/Textarea/WithLabel';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const HeadlessTextarea = () => {
  const BCrumb = [
    {
      to: '/',
      title: 'Home',
    },
    {
      title: 'Textarea',
    },
  ];
  return (
    <>
      <BreadcrumbComp title="Textarea" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicTextarea />
        </div>
        <div className="col-span-12">
          <WithLabelTextarea />
        </div>
        <div className="col-span-12">
          <WithDescriptionTextarea />
        </div>
        <div className="col-span-12">
          <DisableTextarea />
        </div>
      </div>
    </>
  );
};

export default HeadlessTextarea;
