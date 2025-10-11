
import { useContext } from 'react';
import { Avatar, Badge, Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Tooltip } from 'flowbite-react';
import { format } from 'date-fns';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from "react-router";
import { TicketType } from 'src/types/apps/ticket';
import { TicketContext } from 'src/context/TicketContext';



const TicketListing = () => {
  const { tickets, deleteTicket, searchTickets, ticketSearch, filter }: any =
    useContext(TicketContext);
  // const [showCreateForm, setShowCreateForm] = useState(false);
  const navigate = useNavigate();

  const getVisibleTickets = (
    tickets: TicketType[],
    filter: string,
    ticketSearch: string
  ) => {
    switch (filter) {
      case "total_tickets":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Pending":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Pending" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Closed":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Closed" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      case "Open":
        return tickets.filter(
          (c) =>
            !c.deleted &&
            c.Status === "Open" &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

  const visibleTickets = getVisibleTickets(
    tickets,
    filter,
    ticketSearch.toLowerCase()
  );

  const ticketBadge = (ticket: TicketType) => {
    return ticket.Status === "Open"
      ? "success"
      : ticket.Status === "Closed"
        ? "error"
        : ticket.Status === "Pending"
          ? "warning"
          : ticket.Status === "Moderate"
            ? "primary"
            : "primary";
  };

  return (
    <>
      <div className="my-6">
        <div className="flex justify-between items-center mb-4 lg:flex-nowrap flex-wrap lg:gap-0 gap-3">
          <Button
            onClick={() => navigate('/apps/tickets/create')}
            color={'primary'}
          >
            Create Ticket
          </Button>
          <TextInput
            type="text"
            sizing="md"
            className="form-control sm:max-w-60 max-w-full w-full"
            onChange={(e) => searchTickets(e.target.value)}
            placeholder="Search"
            icon={() => <Icon icon="solar:magnifer-line-duotone" height={18} />}
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Id
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Ticket
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Assigned To
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Status
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3 whitespace-nowrap">
                Date
              </TableHeadCell>
              <TableHeadCell className="text-base font-semibold py-3 text-end">
                Action
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y divide-border dark:divide-darkborder">
              {visibleTickets.map((ticket) => (
                <TableRow key={ticket.Id}>
                  <TableCell className="whitespace-nowrap">
                    {ticket.Id}
                  </TableCell>
                  <TableCell className="max-w-md">
                    <h6 className="text-base truncate line-clamp-1">{ticket.ticketTitle}</h6>
                    <p className="text-sm text-darklink dark:text-bodytext truncate line-clamp-1 text-wrap sm:max-w-56">
                      {ticket.ticketDescription}
                    </p>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div>
                        <Avatar
                          img={ticket.thumb}
                          alt={ticket.AgentName}
                          rounded
                        />
                      </div>
                      <h6 className="text-base"> {ticket.AgentName}</h6>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      className={`bg-light${ticketBadge(ticket)}  dark:bg-dark${ticketBadge(ticket)} text-${ticketBadge(ticket)} dark:text-${ticketBadge(ticket)}`}
                    >
                      {ticket.Status}
                    </Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    <p className="text-sm text-darklink dark:text-bodytext">
                      {format(new Date(ticket.Date), "E, MMM d")}
                    </p>
                  </TableCell>
                  <TableCell>
                    <Tooltip content="Delete Ticket" placement="bottom" arrow={false}>
                      <Button className="btn-circle ms-auto" color={"transparent"}>
                        <Icon icon="solar:trash-bin-minimalistic-outline" height="18" onClick={() => deleteTicket(ticket.Id)} />
                      </Button>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default TicketListing;
