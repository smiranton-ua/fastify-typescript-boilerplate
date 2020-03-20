interface HookTypesInterface {
  preParsing: 'preParsing',
  onRequest: 'onRequest',
  preValidation: 'preValidation',
  preHandler: 'preHandler',
  preSerialization: 'preSerialization',
  onError: 'onError',
  onSend: 'onSend',
  onResponse: 'onResponse',
  onClose: 'onClose',
  onRoute: 'onRoute',
  onRegister: 'onRegister'
}

const HOOK_TYPES: HookTypesInterface = {
  onRequest: 'onRequest',
  preParsing: 'preParsing',
  preValidation: 'preValidation',
  preHandler: 'preHandler',
  preSerialization: 'preSerialization',
  onError: 'onError',
  onSend: 'onSend',
  onResponse: 'onResponse',
  onClose: 'onClose',
  onRoute: 'onRoute',
  onRegister: 'onRegister'
};

export { HookTypesInterface };

export default HOOK_TYPES;
