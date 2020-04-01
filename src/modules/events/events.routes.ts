import { FastifyInstance } from 'fastify';

import EventsController from './events.controller';
import EventsSchemas from './events.schemas';

import { registerRoutes } from '../../utils';
import { API_METHOD, API_PATH } from '../../constants';

export default async (fastify: FastifyInstance, _: object, next: Function) => {
  const controller = new EventsController(fastify);

  registerRoutes(fastify, {
    searchEvents: {
      url: API_PATH.SEARCH_EVENTS,
      method: API_METHOD.get,
      controller: controller.searchEvents,
      options: {
        schema: EventsSchemas.searchEvents,
      },
    },
  });
  next();
};
