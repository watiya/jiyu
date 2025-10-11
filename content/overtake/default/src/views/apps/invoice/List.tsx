

import InvoiceList from "src/components/apps/invoice/Invoice-list";
import CardBox from "src/components/shared/CardBox";
import { InvoiceProvider } from "src/context/InvoiceContext";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice List',
  },
];

const InvoiceListing = () => {
  return (
    <InvoiceProvider>
    <BreadcrumbComp title="Invoice List" items={BCrumb} />
    <CardBox>
        <InvoiceList />
    </CardBox>
</InvoiceProvider>
  );
};
export default InvoiceListing;
