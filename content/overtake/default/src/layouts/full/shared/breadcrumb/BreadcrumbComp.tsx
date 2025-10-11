

import { Badge, Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { Icon } from "@iconify/react";
import CardBox from "src/components/shared/CardBox";
interface BreadCrumbType {
  subtitle?: string;
  items?: any[];
  title: string;
  children?: JSX.Element;
}

const BreadcrumbComp = ({ items, title }: BreadCrumbType) => {
  return (
    <>
      <CardBox className={`mb-[30px]`}>
        <Breadcrumb className="flex justify-between">
          <h6 className="text-base">{title}</h6>
          <div className="flex items-center gap-3 ms-auto">
            {items
              ? items.map((item) => (
                  <div key={item.title}>
                    {item.to ? (
                      <BreadcrumbItem href={item.to}>
                        <Icon
                          icon="solar:home-2-line-duotone"
                          height={20}
                        ></Icon>{" "}
                        <span className="ms-3">/</span>
                      </BreadcrumbItem>
                    ) : (
                      <Badge color={"lightprimary"}>{item.title}</Badge>
                    )}
                  </div>
                ))
              : ""}
          </div>
        </Breadcrumb>
      </CardBox>
    </>
  );
};

export default BreadcrumbComp;
