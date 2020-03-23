const mailSchemasMap = {
  sendEmail: {
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        to: { type: 'string' },
      },
    },
  },
};

export default mailSchemasMap;
