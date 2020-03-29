import * as fastify from 'fastify';

import { SwaggerPlugin } from './modules/swagger';
import { DbPlugin } from './modules/db';

import { MailRoutes } from './modules/mail';

import configService from './modules/config/config.service';

import authHook from './hooks/auth.hook';

const server: fastify.FastifyInstance = fastify({
  logger: {
    level: 'info',
  },
});

const startServer = () => {
  const { httpPort, hostname } = configService.getWebServerConfig();

  return server
    .addHook(authHook.type as any, authHook.handler)
    .register(SwaggerPlugin)
    .register(DbPlugin)
    .register(MailRoutes)
    .listen(httpPort, hostname);
};

export default startServer;
