import { FastifyRequest, FastifyReply } from 'fastify';

export type Request = FastifyRequest;

export interface Reply {
  data: object[];
}

export type SearchReply = FastifyReply<Reply>;
