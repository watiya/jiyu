import AlignLeftTypo from "src/components/ui-components/Typography/AlignLeftTypo";
import AlignRightTypo from "src/components/ui-components/Typography/AlignRightTypo";
import BlockOutTypo from "src/components/ui-components/Typography/BlockOutTypo";
import BlockQtIconTypo from "src/components/ui-components/Typography/BlockQtIconTypo";
import DefaultListTypo from "src/components/ui-components/Typography/DefaultListTypo";
import HeadingsTyp from "src/components/ui-components/Typography/HeadingsTyp";
import HorizontalListTypo from "src/components/ui-components/Typography/HorizontalListTypo";
import IconListTypo from "src/components/ui-components/Typography/IconListTypo";
import LargeSizeTypo from "src/components/ui-components/Typography/LargeSizeTypo";
import MediumSizeTypo from "src/components/ui-components/Typography/MediumSizeTypo";
import NestedTypo from "src/components/ui-components/Typography/NestedTypo";
import OrderTypo from "src/components/ui-components/Typography/OrderTypo";
import ParagraphTypo from "src/components/ui-components/Typography/ParagraphTypo";
import ReviewTypo from "src/components/ui-components/Typography/ReviewTypo";
import SmallSizeTypo from "src/components/ui-components/Typography/SmallSizeTypo";
import SolidBgTypo from "src/components/ui-components/Typography/SolidBgTypo";
import UnstyledTypo from "src/components/ui-components/Typography/UnstyledTypo";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Typography",
  },
];

const FlowbiteTypography = () => {
  return (
    <>
      <BreadcrumbComp title="Typography" items={BCrumb} />
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* Headings Typo */}
        <div className="col-span-12">
          <HeadingsTyp />
        </div>
        <div className="col-span-12">
          <BlockOutTypo />
        </div>
        <div className="col-span-12">
          <SolidBgTypo />
        </div>
        <div className="col-span-12">
          <BlockQtIconTypo />
        </div>
        <div className="col-span-12">
          <ParagraphTypo />
        </div>
        <div className="col-span-12">
          <ReviewTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <AlignLeftTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <AlignRightTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <SmallSizeTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <MediumSizeTypo />
        </div>
        <div className="col-span-12">
          <LargeSizeTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <DefaultListTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <IconListTypo />
        </div>
        <div className="col-span-12">
          <NestedTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <UnstyledTypo />
        </div>
        <div className="lg:col-span-6 col-span-12">
          <OrderTypo />
        </div>
        <div className="col-span-12">
          <HorizontalListTypo />
        </div>
      </div>
    </>
  );
};

export default FlowbiteTypography;
