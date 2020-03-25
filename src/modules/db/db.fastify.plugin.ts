import * as fp from 'fastify-plugin';

import DatabaseService from './db.service';

export default fp(async (fastify, _, next) => {
  const db = await DatabaseService.initDatabase();
  fastify.decorate('db', { db });
  next();
});
