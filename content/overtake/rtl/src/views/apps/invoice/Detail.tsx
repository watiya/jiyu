

import InvoiceDetail from "src/components/apps/invoice/Invoice-detail";
import CardBox from "src/components/shared/CardBox";
import { InvoiceProvider } from "src/context/InvoiceContext";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice Details',
  },
];

const InvoiceDetailPage = () => {
  return (
    <InvoiceProvider>
    <BreadcrumbComp title="Invoice Details" items={BCrumb} />
    <CardBox>
        <InvoiceDetail />
    </CardBox>
</InvoiceProvider>
  );
};
export default InvoiceDetailPage;
