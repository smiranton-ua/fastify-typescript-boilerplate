import * as fastify from 'fastify';
import * as fastifyCors from 'fastify-cors';
import * as fastifyHelmet from 'fastify-helmet';
import * as fastifySwagger from 'fastify-swagger';

import { EventsRoutes, EventsPlugin } from './modules/events';
import { SelectionsPlugin } from './modules/selections';
import { MarketsPlugin } from './modules/markets';
import { StatsPlugin } from './modules/stats';
import { DbPlugin } from './modules/db';

import { API } from './constants';

export const createServer = async ({
  swaggerConfig,
  fastifyConfig,
  mongoConfig,
  statsConfig
}): Promise<fastify.FastifyInstance> => {
  const server = fastify(fastifyConfig);

  server
    // Configs
    .register(fastifyCors)
    .register(fastifyHelmet)
    .register(fastifySwagger, swaggerConfig)

    // Custom plugins
    .register(DbPlugin, mongoConfig)
    .register(StatsPlugin, statsConfig)
    .register(SelectionsPlugin)
    .register(MarketsPlugin)
    .register(EventsPlugin)

    // APIs modules
    .register(EventsRoutes, { prefix: API.PREFIX.EVENTS });
  // .register(SelectionsRoutes, { prefix: API.PREFIX.SELECTIONS })
  // .register(MarketsRoutes, { prefix: API.PREFIX.MARKETS })

  return server;
};
