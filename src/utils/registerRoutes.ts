import { FastifyInstance } from "fastify";

const registerRoutes = (fastifyInstance: FastifyInstance, routesMap) => {
  Object
    .values(routesMap)
    .forEach(({ method, url, options, controller }) =>
      fastifyInstance[method](url, options, controller)
    )
};

export default registerRoutes;
