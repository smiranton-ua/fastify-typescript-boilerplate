import { SelectionsController } from '../selections';
import { FastifyInstance } from 'fastify';

import { registerRoutes } from '../../utils';

import { API } from '../../constants';

export default async (fastify: FastifyInstance, _: object, next: Function) => {
  const { log, selectionsService } = fastify;

  const controller = new SelectionsController(log, selectionsService);

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
