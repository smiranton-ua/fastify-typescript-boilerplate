import * as fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

import { MongoConfigType } from '../config';
import { DbService } from '../db';

const plugin = (fastify: FastifyInstance, opts: MongoConfigType, next: Function) => {
  const db = DbService.getInstance(opts, fastify.log);

  fastify.decorate('db', db);

  next();
};

export default fp(plugin);
