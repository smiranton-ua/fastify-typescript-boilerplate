import * as fp from 'fastify-plugin';
import DatabaseService from './db.service';

export default fp(async (fastify, opts, next) => {
  const dbService = new DatabaseService();
  const db = await dbService.getDatabase();

  fastify.decorate('db', { db });

  next();
});
