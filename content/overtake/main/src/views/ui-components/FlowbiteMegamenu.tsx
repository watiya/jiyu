import DefaultMegamenu from 'src/components/ui-components/Megamenu/DefaultMegamenu';
import FullWidthCTA from 'src/components/ui-components/Megamenu/FullWidthCTA';
import FullWidthMegamenu from 'src/components/ui-components/Megamenu/FullWidthMegamenu';
import FullWidthWithImage from 'src/components/ui-components/Megamenu/FullWidthWithImage';
import MegamenuWithIcons from 'src/components/ui-components/Megamenu/MegamenuWithIcons';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Mega Menu',
  },
];


const FlowbiteMegamenu = () => {
  return (
    <>
      <BreadcrumbComp title="Mega Menu" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Default */}
        <div className="col-span-12">
          <DefaultMegamenu />
        </div>
        {/* With Icons */}
        <div className="col-span-12">
          <MegamenuWithIcons />
        </div>
        {/* Full Width Megamenu */}
        <div className="col-span-12">
          <FullWidthMegamenu />
        </div>
        {/* Full Width CTA */}
        <div className="col-span-12">
          <FullWidthCTA />
        </div>
        {/* Full Width with Image */}
        <div className="col-span-12">
          <FullWidthWithImage />
        </div>
      </div>
    </>
  );
};

export default FlowbiteMegamenu;
