import { Button } from "flowbite-react";
import GeneralDetail from "../../../components/apps/ecommerce/addProduct/GeneralDetail";
import Media from "../../../components/apps/ecommerce/addProduct/Media";
import Pricing from "../../../components/apps/ecommerce/addProduct/Pricing";
import ProductData from "../../../components/apps/ecommerce/addProduct/ProductData";
import Producttemplate from "../../../components/apps/ecommerce/addProduct/ProductTemplate";
import Status from "../../../components/apps/ecommerce/addProduct/Status";
import Variation from "../../../components/apps/ecommerce/addProduct/Variation";
import CustomerReviews from "../../../components/apps/ecommerce/editProduct/CustomerReviews";
import ProductrChart from "../../../components/apps/ecommerce/editProduct/ProductrChart";
import Thumbnail from "../../../components/apps/ecommerce/editProduct/Thumbnail";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Edit Product",
  },
];


const EditProduct = () => {
  return (
    <>
      <BreadcrumbComp title="Edit Product" items={BCrumb} />
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
            {/* CustomerReviews */}
            <CustomerReviews />
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
            {/* ProductrChart */}
            <ProductrChart />
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

export default EditProduct;
