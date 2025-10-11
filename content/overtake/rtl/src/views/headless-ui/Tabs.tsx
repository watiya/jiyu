import BasicTabs from "src/components/headless-ui/Tabs/BasicTabs"
import ControllTabSelect from "src/components/headless-ui/Tabs/ControllTabSelect"
import DisableTab from "src/components/headless-ui/Tabs/DisableTab"
import ListingForChangeTab from "src/components/headless-ui/Tabs/ListingForChangeTab"
import MannuallActiveTab from "src/components/headless-ui/Tabs/MannuallActiveTab"
import RenderAsElementTab from "src/components/headless-ui/Tabs/RenderAsElementTab"
import SpecifiedTab from "src/components/headless-ui/Tabs/SpecifiedTab"
import VerticalTabs from "src/components/headless-ui/Tabs/VerticalTabs"
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp"

const BCrumb = [
    {
      to: "/",
      title: "Home",
    },
    {
      title: "Tabs",
    },
  ];

const Tabs = () => {
  return (
    <>
      <BreadcrumbComp title="Tabs" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        <div className="col-span-12">
          <BasicTabs />
        </div>
        <div className="col-span-12">
          <VerticalTabs />
        </div>
        <div className="col-span-12">
          <DisableTab />
        </div>
        <div className="col-span-12">
          <MannuallActiveTab />
        </div>
        <div className="col-span-12">
          <SpecifiedTab />
        </div>
        <div className="col-span-12">
            <ListingForChangeTab/>
        </div>
        <div className="col-span-12">
            <ControllTabSelect/>
        </div>
        <div className="col-span-12">
            <RenderAsElementTab/>
        </div>
      </div>
    </>
  )
}

export default Tabs