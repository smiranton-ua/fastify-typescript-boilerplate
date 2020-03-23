import { FastifyInstance } from 'fastify';

import MailController from './mail.controller';
import MailSchemas from './mail.routes.schemas';
import ApiMethods from '../../constants/methodsMap';

import { registerRoutes } from '../../utils';

const PATH = {
  SEND_EMAIL: 'mailer/send/email',
  SEND_VIBER: 'mailer/send/viber',
  SEND_SMS: 'mailer/send/sms',
};

const routesMap = {
  sendEmail: {
    url: PATH.SEND_EMAIL,
    method: ApiMethods.get,
    controller: MailController.sendEmail,
    options: {
      schema: MailSchemas.sendEmail,
    },
  },
};

export default async (fastify: FastifyInstance, _: object, next: Function) => {
  registerRoutes(fastify, routesMap);
  next();
};
