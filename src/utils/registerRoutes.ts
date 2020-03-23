import { FastifyInstance } from 'fastify';

const registerRoutes = (fastify: FastifyInstance, routesMap: object) => {
  Object.values(routesMap).forEach(({ method, url, options, controller }) =>
    fastify[method](url, options, controller),
  );
};

export default registerRoutes;
