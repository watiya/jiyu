import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const BbgColor = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-muted px-5 py-3 dark:bg-darkmuted rounded-md"
      >
        <BreadcrumbItem href="#" icon={HiHome}>
          Home
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>
        <BreadcrumbItem>matdash IM</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BbgColor;
