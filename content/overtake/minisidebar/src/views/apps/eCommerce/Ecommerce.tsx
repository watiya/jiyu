// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EcommerceShop from 'src/components/apps/ecommerce/productGrid';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';





const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Shop',
  },
];
const Ecommerce = () => {


  return (
    <>
        <BreadcrumbComp title="Shop App" items={BCrumb} />
        <EcommerceShop />
    </>

  );
};

export default Ecommerce;
