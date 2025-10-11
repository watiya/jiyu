
import { TicketProvider } from "src/context/TicketContext";
import TicketFilter from "./TicketFilter";
import TicketListing from "./TicketListing";
import CardBox from "src/components/shared/CardBox";



const TicketsApp = () => {
  return (
    <>
      <TicketProvider>
        <CardBox>
          <TicketFilter />
          <TicketListing />
        </CardBox>
      </TicketProvider>
    </>
  );
};

export default TicketsApp;
