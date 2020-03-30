import * as fastify from 'fastify';

import { SwaggerPlugin } from './modules/swagger';
import { DatabasePlugin } from './modules/db';

import { MailRoutes } from './modules/mail';

import configService from './modules/config/config.service';

const server: fastify.FastifyInstance = fastify({
  logger: {
    level: 'info',
  },
});

const startServer = async () => {
  const { httpPort, hostname } = configService.getWebServerConfig();

  await server
    .register(SwaggerPlugin)
    .register(DatabasePlugin)
    .register(MailRoutes)
    .listen(httpPort, hostname);

  server.log.info(
    `Swagger listening at http://${hostname}:${httpPort}/documentation}`,
  );
};

export default startServer;
