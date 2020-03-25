import * as fastify from 'fastify';

import { MailRoutes } from './modules/mail';
import { DbPlugins } from './modules/db';

import configService from './modules/config/config.service';

import authHook from './hooks/auth.hook';

const server: fastify.FastifyInstance = fastify();

const startServer = () => {
  const { httpPort, hostname } = configService.getWebServerConfig();

  server
    .addHook(authHook.type as any, authHook.handler)
    .register(DbPlugins)
    .register(MailRoutes)
    .listen(httpPort, hostname, (err: Error, address: string) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }

      console.log(`Server started, listening on ${address}`);
    });
};

export default startServer;
