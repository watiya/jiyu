

import BasicBreadcrumb from 'src/components/shadcn-ui/Breadcrumb/BasicBreadcrumb';
import BreadcrumbWithSeparator from 'src/components/shadcn-ui/Breadcrumb/BreadcrumbWithSeparator';
import BreadcrumbWithDropdown from 'src/components/shadcn-ui/Breadcrumb/BreadcrumbWithDropdown';
import BreadcrumbWithEllipsis from 'src/components/shadcn-ui/Breadcrumb/BreadcrumbWithEllipsis';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

  
  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Breadcrumb",
    },
  ];
const page = () => {
  return (
    <>
    <BreadcrumbComp title="Breadcrumb" items={BCrumb} />
    <div className="grid grid-cols-12 gap-5 sm:gap-30">
      {/* Basic */}
      <div className="col-span-12">
        <BasicBreadcrumb/>
      </div>
       <div className="col-span-12">
        <BreadcrumbWithSeparator/>
      </div>
      <div className="col-span-12">
        <BreadcrumbWithDropdown/>
      </div>
      <div className="col-span-12">
        <BreadcrumbWithEllipsis/>
      </div>
     

    </div>
  </>
  )
}

export default page