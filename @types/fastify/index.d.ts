import * as https from 'https';
import { Server, IncomingMessage, ServerResponse } from 'http';
import {
  Http2SecureServer,
  Http2Server,
  Http2ServerRequest,
  Http2ServerResponse
} from 'http2';

type HttpServer = Server | Http2Server | Http2SecureServer | https.Server;
type HttpRequest = IncomingMessage | Http2ServerRequest;
type HttpResponse = ServerResponse | Http2ServerResponse;

declare module 'fastify' {}
