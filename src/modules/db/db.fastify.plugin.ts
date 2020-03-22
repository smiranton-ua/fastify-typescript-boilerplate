import * as fp from 'fastify-plugin';

import DatabaseService from './db.service';

export default fp(async (fastify, opts, next) => {
  const db = await DatabaseService.initDatabase();

  fastify.decorate('db', { db });

  next();
});
