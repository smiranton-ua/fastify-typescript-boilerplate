import { MarketsController } from '../markets';
import { FastifyInstance } from 'fastify';

import { registerRoutes } from '../../utils';

import { API } from '../../constants';

export default async (fastify: FastifyInstance, _: object, next: Function) => {
  const { log, marketsService } = fastify;

  const controller = new MarketsController(log, marketsService);

  registerRoutes(fastify, {
    test: {
      url: API.PATH.GET_BY_ID,
      method: API.METHOD.get,
      controller: controller.test,
      options: {}
    }
  });

  next();
};
