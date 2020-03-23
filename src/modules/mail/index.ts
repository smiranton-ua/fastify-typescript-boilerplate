import { FastifyInstance } from 'fastify';

import { registerRoutes } from '../../utils';
import mailRoutesMap from './mail.routes';

export default async (fastify: FastifyInstance, _: object, next: Function) => {
  registerRoutes(fastify, mailRoutesMap);
  next();
};
