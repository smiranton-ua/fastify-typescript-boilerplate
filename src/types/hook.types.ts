export enum HookTypes {
  preParsing = 'preParsing',
  onRequest = 'onRequest',
  preValidation = 'preValidation',
  preHandler = 'preHandler',
  preSerialization = 'preSerialization',
  onError = 'onError',
  onSend = 'onSend',
  onResponse = 'onResponse',
  onClose = 'onClose',
  onRoute = 'onRoute',
  onRegister = 'onRegister',
}

export interface HookInterface {
  type: HookTypes;
  handler: (req: any, res: any, done: Function) => void;
}
