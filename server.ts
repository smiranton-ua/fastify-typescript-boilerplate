import * as fastify from 'fastify'

import userRoutes from './modules/user/user.routes.plugin';

import configService from './modules/config/config.service';

import authHook from './hooks/auth.hook';

const server: fastify.FastifyInstance = fastify();

const startServer = () =>
  server
    .addHook(authHook.type as any, authHook.handler)
    .register(userRoutes)
    .listen(
      configService.getWebServerConfig.httpPort,
      configService.getWebServerConfig.hostname,
      (err, address) => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        console.log(`Server started, listening on ${address}`);
      }
    );

export default startServer;
