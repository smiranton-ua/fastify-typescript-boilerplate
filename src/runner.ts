import { createServer } from './server';

import { ConfigService } from './modules/config';

export const startServer = async () => {
  const fastifyConfig = { logger: { level: 'info', prettyPrint: true } };
  const {
    getWebServerConfig: { httpPort, hostname, apiDocumentationPath: docPath },
    getStatisticsConfig: statsConfig,
    getSwaggerConfig: swaggerConfig,
    getMongoConfig: mongoConfig
  } = ConfigService;

  const server = await createServer({
    fastifyConfig,
    swaggerConfig,
    mongoConfig,
    statsConfig
  });

  await server.ready();
  server.log.info('Server successfully booted');

  await server.listen(httpPort, hostname);
  server.log.info(`Swagger listening at http://${hostname}:${httpPort}${docPath}`);
};

startServer();
