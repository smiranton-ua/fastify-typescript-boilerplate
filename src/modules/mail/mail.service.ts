// @ts-ignore
import sgMail from '@sendgrid/mail';

import { EmailPayload } from './mail.types';

class EmailService {
  private from = 'test@test.com';

  constructor() {
    sgMail.setApiKey(
      process.env.SENDGRID_API_KEY ||
        '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',
    );
  }

  private sendEmailHtml = ({ to, subject, html }: EmailPayload): void => {
    sgMail.send({ to, html, subject, from: this.from });
  };

  private sendEmailText = ({ to, subject, text }: EmailPayload): void => {
    sgMail.send({ to, text, subject, from: this.from });
  };

  public sendEmail = ({ to, subject, text, html }: EmailPayload): void => {
    if (html) {
      this.sendEmailHtml({ to, subject, html });
    } else {
      this.sendEmailText({ to, subject, text });
    }
  };
}

export default new EmailService();
