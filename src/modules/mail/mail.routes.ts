import MailController from './mail.controllers';
import MailSchemas from './mail.routes.schemas';

import ApiMethods from '../../constants/methodsMap';
import { URL } from './mail.constants';

const mailRoutesMap = {
  getUserInfo: {
    url: URL.SEND_EMAIL,
    method: ApiMethods.get,
    controller: MailController.sendEmail,
    options: {
      schema: MailSchemas.sendEmail,
    },
  },
};

export default mailRoutesMap;
