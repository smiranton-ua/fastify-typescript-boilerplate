import * as fp from 'fastify-plugin';

export default fp(async (server, opts, next) => {
  // just example
  server.get('/user/:id', {}, async (request, reply) => {
    try {
      const _id = request.params.id;

      const user = await server.db.findOne({
        _id
      });

      if (!user) {
        return reply.send(404);
      }

      return reply.code(200).send(user);
    } catch (error) {
      request.log.error(error);
      return reply.send(400);
    }
  });

  next();
});
