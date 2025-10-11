
import { Chance } from 'chance';

import user2 from '/src/assets/images/profile/user-2.jpg';
import user3 from '/src/assets/images/profile/user-3.jpg';
import user4 from '/src/assets/images/profile/user-4.jpg';
import user5 from '/src/assets/images/profile/user-5.jpg';
import user6 from '/src/assets/images/profile/user-6.jpg';
import user7 from '/src/assets/images/profile/user-7.jpg';
import user8 from '/src/assets/images/profile/user-8.jpg';
import user10 from "/src/assets/images/profile/user-10.jpg";
import { TicketType } from 'src/types/apps/ticket';
import { http, HttpResponse } from 'msw';

const chance = new Chance();

export let TicketData: TicketType[] = [
  {
    Id: 1,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user10,
    AgentName: 'Liam',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 2,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: user2,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 3,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: user3,
    AgentName: 'Jack',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 4,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user4,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 5,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user5,
    AgentName: 'Liam',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 6,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: user6,
    AgentName: 'Jack',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 7,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: user7,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 8,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: user8,
    AgentName: 'John',
    Date: chance.date(),
    deleted: false,
  },
];

export const TicketHandlers = [
  // Mock GET request to retrieve Ticket data
  http.get('/api/data/ticket/TicketData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // Mock DELETE endpoint for deleting a ticket
  http.delete('/api/data/ticket/delete', async ({ request }) => {
    try {
      const { id } = (await request.json()) as { id: any };
      const tickets = TicketData.map((ticket) =>
        ticket.Id === id ? { ...ticket, deleted: true } : ticket,
      );
      TicketData = tickets;
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // Mock POST endpoint for adding a ticket
  http.post('/api/data/ticket/add', async ({ request }) => {
    try {
      const newTicket = (await request.json()) as TicketType;
      TicketData.push(newTicket)
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

];



