const mailSchemasMap = {
  sendEmail: {
    querystring: {
      type: 'object',
      required: ['email', 'subject', 'text'],
      properties: {
        email: {
          type: 'string',
          format: 'email',
        },
        text: {
          type: 'string',
        },
        subject: {
          type: 'string',
        },
      },
    },
    description: 'Endpoint to send email',
    tags: ['mailer'],
    summary: 'send email',
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
        properties: {
          ok: { type: 'boolean' },
        },
      },
    },
  },
};

export default mailSchemasMap;
