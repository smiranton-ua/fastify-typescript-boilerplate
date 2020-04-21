import { Db, Collection as MongoCollection } from 'mongodb';
import * as http from 'http';
import {
  Logger as FastifyLogger,
  FastifyRequest,
  FastifyReply,
  ServerOptions
} from 'fastify';

import { SelectionsService } from '../modules/selections';
import { MarketsService } from '../modules/markets';
import { EventsService } from '../modules/events';
import { StatsHooks } from '../modules/stats';
import { DbService } from '../modules/db';

export interface ReplyInterface {
  data: object | object[];
}

export type RequestType = FastifyRequest;
export type ReplyType = FastifyReply<ReplyInterface>;

export type CollectionType = MongoCollection;
export type DatabaseType = Db;

export type LoggerType = FastifyLogger;

export type OptionsType = {
  level?: number;
};

export interface CreateServerInterface {
  swaggerConfig: object;
  fastifyConfig: ServerOptions;
  mongoConfig: {
    url: string;
  };
  statsConfig: {
    host: string;
    port: number;
    prefix: string;
  };
}

declare module 'fastify' {
  interface FastifyInstance<
    HttpServer = http.Server,
    HttpRequest = http.IncomingMessage,
    HttpResponse = http.ServerResponse
  > {
    selectionsService: SelectionsService;
    marketsService: MarketsService;
    eventsService: EventsService;
    statsHooks: StatsHooks;
    db: DbService;
  }
}
