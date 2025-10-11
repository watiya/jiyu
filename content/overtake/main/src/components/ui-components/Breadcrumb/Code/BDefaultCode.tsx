import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const BDefaultCode = () => {
  return (
    <div>
      <Breadcrumb aria-label="Default breadcrumb example" className="justify-start! w-auto!">
        <BreadcrumbItem href="#" icon={HiHome}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>matdash IM</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BDefaultCode;
