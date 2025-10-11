import ProductCheckout from "../../../components/apps/ecommerce/checkout/ProductCheckout";
import CardBox from "../../../components/shared/CardBox";
import { ProductProvider } from "../../../context/Ecommercecontext";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Checkout",
  },
];


const Checkout = () => {
  return (
    <>
      <ProductProvider>
        <BreadcrumbComp title="Checkout" items={BCrumb} />
        <CardBox>
          <ProductCheckout />
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default Checkout;
