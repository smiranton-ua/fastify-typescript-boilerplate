import * as fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

import { SelectionsService } from '../selections';

const plugin = async (fastify: FastifyInstance, _: object, next: Function) => {
  const { db, log } = fastify;

  const selectionsService = new SelectionsService(db, log);

  fastify.decorate('selectionsService', selectionsService);

  next();
};

export default fp(plugin);
