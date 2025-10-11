import CreateInvoiceApp from "src/components/apps/invoice/Add-invoice";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice Create',
  },
];

const CreateInvoice = () => {
  return (
    <>
       <BreadcrumbComp title=" Create A New Invoice " items={BCrumb} />
       <CreateInvoiceApp />
    </>
  );
};
export default CreateInvoice;
