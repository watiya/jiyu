
import BasicProgressbar from 'src/components/shadcn-ui/Progressbar/BasicProgressbar';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Progressbar",
    },
  ];
const page = () => {
  return (
    <>
    <BreadcrumbComp title="Progressbar" items={BCrumb} />
    <div className="grid grid-cols-12 gap-5 sm:gap-30">
      {/* Basic */}
      <div className="lg:col-span-6 md:col-span-6 col-span-12">
        <BasicProgressbar/>
      </div>

    </div>
  </>
  )
}

export default page