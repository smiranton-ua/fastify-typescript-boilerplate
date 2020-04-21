import { RequestType, ReplyType, LoggerType } from '../../types/server.types';
import { EventsService } from '../events';

import { ERRORS } from '../../constants';

class EventsController {
  constructor(
    private readonly logger: LoggerType,
    private readonly service: EventsService
  ) {
    logger.info(`Created Events controller`);
  }

  public getEventById = async ({ params, query }: RequestType, reply: ReplyType) => {
    try {
      const { operator } = query;
      const { id } = params;

      const data = await this.service.getEventById(id, operator);

      if (!data) {
        return reply.code(404).send({ message: ERRORS.NOT_FOUND });
      }

      reply.code(200).send({ data });
    } catch (ex) {
      this.logger.error(ex);
      throw ex;
    }
  };

  public searchEvents = async ({ params, query }: RequestType, reply: ReplyType) => {
    try {
      const { operator, limit } = query;
      const { search } = params;

      const data = await this.service.searchEvents(search, limit, operator);

      reply.code(200).send({ data });
    } catch (ex) {
      this.logger.error(ex);
      throw ex;
    }
  };
}

export default EventsController;
