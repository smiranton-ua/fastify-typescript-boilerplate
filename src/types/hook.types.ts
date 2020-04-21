import { RequestType, ReplyType } from './server.types';

export enum ReqResHookTypes {
  preHandler = 'preHandler',
  preParsing = 'preParsing',
  preValidation = 'preValidation',
  preSerialization = 'preSerialization',
  onSend = 'onSend',
  onError = 'onError',
  onRequest = 'onRequest',
  onResponse = 'onResponse'
}

export enum AppHookTypes {
  onClose = 'onClose',
  onRoute = 'onRoute',
  onRegister = 'onRegister'
}

export interface HookInterface {
  type: ReqResHookTypes;
  handler(req: RequestType, res: ReplyType, done: Function): void;
}
