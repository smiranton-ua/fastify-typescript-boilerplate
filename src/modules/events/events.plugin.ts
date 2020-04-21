import * as fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

import { EventsService } from '../events';

const plugin = (fastify: FastifyInstance, _: object, next: Function) => {
  const { log, db, selectionsService, marketsService } = fastify;

  const eventsService = new EventsService(db, log, marketsService, selectionsService);

  fastify.decorate('eventsService', eventsService);

  next();
};

export default fp(plugin);
