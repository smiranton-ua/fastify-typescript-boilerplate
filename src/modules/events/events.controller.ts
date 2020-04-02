import { Request, SearchReply } from './events.types';

import EventsService from './events.service';

class EventsController {
  private service: EventsService;

  constructor(fastify) {
    this.service = new EventsService(fastify.mongo.db);
  }

  public searchEvents = async (request: Request, reply: SearchReply) => {
    try {
      const { search } = request.params;

      const data = await this.service.searchEvents(search);

      reply.code(200).send({ data });
    } catch (ex) {
      request.log.error(ex);
      throw ex;
    }
  };
}

export default EventsController;
