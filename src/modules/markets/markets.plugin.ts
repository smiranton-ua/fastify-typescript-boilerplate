import { FastifyInstance } from 'fastify';
import * as fp from 'fastify-plugin';

import { MarketsService } from '../markets';

const plugin = async (fastify: FastifyInstance, _: object, next: Function) => {
  const { db, log } = fastify;

  const marketsService = new MarketsService(db, log);

  fastify.decorate('marketsService', marketsService);

  next();
};

export default fp(plugin);
