
import { InvoiceProvider } from "src/context/InvoiceContext";
import CreateInvoice from "./create";
import CardBox from "src/components/shared/CardBox";


function CreateInvoiceApp() {
    return (
        <InvoiceProvider>
            <CardBox>
                <CreateInvoice />
            </CardBox>
        </InvoiceProvider>
    )
}
export default CreateInvoiceApp;
