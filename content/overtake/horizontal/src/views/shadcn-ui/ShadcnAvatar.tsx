

import BasicAvatar from 'src/components/shadcn-ui/Avatar/BasicAvatar';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Avatar",
    },
  ];

const page = () => {
  return (
    <>
    <BreadcrumbComp title="Avatar" items={BCrumb} />
    <div className="grid grid-cols-12 gap-5 sm:gap-30">
      {/* Basic */}
      <div className="col-span-12">
        <BasicAvatar />
      </div>
    </div>
  </>
  )
}

export default page