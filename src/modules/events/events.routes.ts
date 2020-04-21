import { FastifyInstance } from 'fastify';
import { EventsController, EventsSchemas } from '../events';

import { registerRoutes } from '../../utils';

import { API, STATS } from '../../constants';

export default async (fastify: FastifyInstance, _: object, next: Function) => {
  const { log, eventsService, statsHooks } = fastify;

  const controller = new EventsController(log, eventsService);

  registerRoutes(fastify, {
    getEventById: {
      url: API.PATH.GET_BY_ID,
      method: API.METHOD.get,
      controller: controller.getEventById,
      options: {
        schema: EventsSchemas.getEventById,
        onRequest: statsHooks.sendStatsOnRequest(
          `${STATS.MODULE.EVENTS}.${STATS.ENDPOINT.GET_EVENT_BY_ID}`
        ),
        onResponse: statsHooks.sendStatsOnResponse(
          `${STATS.MODULE.EVENTS}.${STATS.ENDPOINT.GET_EVENT_BY_ID}`
        )
      }
    },
    searchEvents: {
      url: API.PATH.SEARCH_EVENTS,
      method: API.METHOD.get,
      controller: controller.searchEvents,
      options: {
        schema: EventsSchemas.searchEvents,
        onRequest: statsHooks.sendStatsOnRequest(
          `${STATS.MODULE.EVENTS}.${STATS.ENDPOINT.SEARCH_EVENTS}`
        ),
        onResponse: statsHooks.sendStatsOnResponse(
          `${STATS.MODULE.EVENTS}.${STATS.ENDPOINT.SEARCH_EVENTS}`
        )
      }
    }
  });

  next();
};
