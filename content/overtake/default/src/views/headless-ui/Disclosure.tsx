import BasicDisclosure from "src/components/headless-ui/Disclosure/BasicDisclosure";
import DisclosureManually from "src/components/headless-ui/Disclosure/DisclosureManually";
import FramerDiclosure from "src/components/headless-ui/Disclosure/FramerDiclosure";
import RenderingDisclosure from "src/components/headless-ui/Disclosure/RenderingDisclosure";
import TransitionDisclosure from "src/components/headless-ui/Disclosure/TransitionDisclosure";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Disclosure",
    },
  ];

const Disclosure = () => {
  return (
    <>
      <BreadcrumbComp title="Disclosure" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicDisclosure />
        </div>
        <div className="col-span-12">
          <TransitionDisclosure />
        </div>
        <div className="col-span-12">
          <DisclosureManually />
        </div>
        <div className="col-span-12">
          <RenderingDisclosure />
        </div>
        <div className="col-span-12">
          <FramerDiclosure />
        </div>
      </div>
    </>
  )
}

export default Disclosure