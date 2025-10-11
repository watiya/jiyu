import BasicDropdown from 'src/components/shadcn-ui/Dropdown/BasicDropdown';
import DropdownWithRadio from 'src/components/shadcn-ui/Dropdown/DropdownWithRadio';
import { DropdownMenuCheckboxes } from 'src/components/shadcn-ui/Dropdown/DropdownMenuCheckboxes';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

  
  const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Dropdown",
    },
  ];
  
const ShadcnDropdown = () => {
  return (
    <>
    <BreadcrumbComp title="Dropdown" items={BCrumb} />
    <div className="grid grid-cols-12 gap-5 sm:gap-30">
      {/* Basic */}
      <div className="col-span-12">
        <BasicDropdown />
      </div>
      <div className="col-span-12">
        <DropdownWithRadio />
      </div>
      <div className="col-span-12">
        <DropdownMenuCheckboxes />
      </div>

    </div>
  </>
  )
}

export default ShadcnDropdown