const userSchemasMap = {
  getUserInfo: {
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'number' }
      },
    },
  },
};

export default userSchemasMap;
