import MailService from './mail.service';

class EmailController {
  public sendEmail = async (req, res) => {
    try {
      const payload = {
        to: 'smiranton.kiev@gmail.com',
        subject: 'test',
        text: 'test text',
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
