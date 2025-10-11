import GeneralDetail from "src/components/apps/ecommerce/addProduct/GeneralDetail";
import Media from "src/components/apps/ecommerce/addProduct/Media";
import Pricing from "src/components/apps/ecommerce/addProduct/Pricing";
import ProductData from "src/components/apps/ecommerce/addProduct/ProductData";
import Producttemplate from "src/components/apps/ecommerce/addProduct/ProductTemplate";
import Status from "src/components/apps/ecommerce/addProduct/Status";
import Variation from "src/components/apps/ecommerce/addProduct/Variation";
import Thumbnail from "src/components/apps/ecommerce/editProduct/Thumbnail";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";
import { Button } from "flowbite-react";


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Add Product",
  },
];

const AddProduct = () => {
  return (
    <>
      <BreadcrumbComp title="Add Product" items={BCrumb} />
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="lg:col-span-8 col-span-12">
          <div className="flex flex-col gap-[30px]">
            {/* General */}
            <GeneralDetail />
            {/* Media  */}
            <Media />
            {/* Variation  */}
            <Variation />
            {/* Pricing  */}
            <Pricing />
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <div className="flex flex-col gap-[30px]">
            {/* Thumbnail */}
            <Thumbnail />
            {/* Status */}
            <Status />
            {/* ProductData */}
            <ProductData />
            {/* Producttemplate */}
            <Producttemplate />
          </div>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <div className="sm:flex gap-3">
            <Button color={"primary"} className="sm:mb-0 mb-3 w-fit">
              Save changes
            </Button>
            <Button color={"lighterror"} className="w-fit">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
