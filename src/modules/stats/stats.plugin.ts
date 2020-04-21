import * as fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

import { StatsService, StatsHooks } from '../stats';
import { StatisticConfigType } from '../config';

const plugin = (fastify: FastifyInstance, opts: StatisticConfigType, next: Function) => {
  const { log } = fastify;

  const statsService = new StatsService(log, opts);
  const statsHooks = new StatsHooks(log, statsService);

  fastify.decorate('statsHooks', statsHooks);

  next();
};

export default fp(plugin);
