import * as fastify from 'fastify';

import mailerRoutes from './modules/mail';

import configService from './modules/config/config.service';

import authHook from './hooks/auth.hook';

const server: fastify.FastifyInstance = fastify();

const startServer = () => {
  const {
    getWebServerConfig: { httpPort, hostname },
  } = configService;
  server
    .addHook(authHook.type as any, authHook.handler)
    .register(mailerRoutes)
    .listen(httpPort, hostname, (err: Error, address: string) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server started, listening on ${address}`);
    });
};

export default startServer;
