import * as mailer from '@sendgrid/mail';

import { EmailPayload } from './mail.types';

class EmailService {
  private from = 'test@test.com';

  constructor() {
    if (!process.env.SENDGRIP_API_KEY) {
      throw new Error('Missed send grid api key in the process envs');
    }
    mailer.setApiKey(process.env.SENDGRID_API_KEY);
  }

  public sendEmail = async ({ text, html, ...rest }: EmailPayload) => {
    const payload = {
      from: this.from,
      ...rest,
      ...(!!html && { html }),
      ...(!!text && { text }),
    };

    try {
      await mailer.send(payload);
    } catch (ex) {
      console.error(ex);
      throw ex;
    }
  };
}

export default new EmailService();
