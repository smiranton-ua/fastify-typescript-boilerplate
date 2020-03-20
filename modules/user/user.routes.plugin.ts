import registerRoutes from "../../utils/registerRoutes";
import userRoutesMap from "./user.routes.map";

export default async (fastify, opts, next) => {
  // just example
  registerRoutes(fastify, userRoutesMap);

  next();
};
