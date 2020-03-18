import * as fastify from 'fastify'

import dbPlugin from './modules/db/db.fastify.plugin';

import userRoutes from './routes/user.routes';

import configService from './modules/config/config.service';

import authHook from './hooks/auth.hook';

const server: fastify.FastifyInstance = fastify();

const startServer = () =>
  server
    .addHook('preHandler', authHook)
    .register(dbPlugin)
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

startServer();
