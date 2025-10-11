

import EditInvoicePage from "src/components/apps/invoice/Edit-invoice";
import CardBox from "src/components/shared/CardBox";
import { InvoiceProvider } from "src/context/InvoiceContext";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice Edit',
  },
];

const InvoiceEdit = () => {
  return (
    <InvoiceProvider>
    <BreadcrumbComp title="Invoice Edit" items={BCrumb} />
    <CardBox>
        <EditInvoicePage />
    </CardBox>
</InvoiceProvider>
  );
};

export default InvoiceEdit;
