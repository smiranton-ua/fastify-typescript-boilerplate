import { FastifyRequest, FastifyReply } from 'fastify';

import MailService from './mail.service';

class EmailController {
  public sendEmail = async (
    req: FastifyRequest,
    res: FastifyReply<{ ok: 1 }>,
  ) => {
    try {
      const {
        query: { email, text, subject },
      } = req;
      req.log.info(req.query);

      const payload = {
        to: email,
        subject,
        text,
      };

      await MailService.sendEmail(payload);

      res.code(200).send({ ok: 1 });
    } catch (ex) {
      console.error(ex);
      throw ex;
    }
  };
}

export default new EmailController();
