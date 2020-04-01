require('dotenv').config();
import * as fastify from 'fastify';

import { ConfigService } from './modules/config';
import { EventsRoutes } from './modules/events';

import { API_PREFIX } from './constants';

const startServer = async () => {
  const server: fastify.FastifyInstance = fastify({ logger: { level: 'info' } });
  const {
    getWebServerConfig: { httpPort, hostname },
    getSwaggerCongif: { swaggerOption },
    getMongoConfig: { mongoURL },
  } = ConfigService;

  await server
    .register(require('fastify-swagger'), swaggerOption)
    .register(require('fastify-mongodb'), { url: mongoURL })
    .register(EventsRoutes, { prefix: API_PREFIX.EVENTS })
    .listen(httpPort, hostname);

  server.log.info(`Swagger listening at http://${hostname}:${httpPort}/documentation}`);
};

startServer();
