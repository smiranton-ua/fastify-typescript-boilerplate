const eventsSchemasMap = {
  searchEvents: {
    params: {
      type: 'object',
      properties: {
        search: {
          type: 'string',
        },
      },
    },
    description: 'Endpoint to search events',
    tags: ['events'],
    summary: 'Search events',
    response: {
      200: {
        description: 'Succesful response',
        type: 'object',
        properties: {
          data: {},
        },
      },
    },
  },
};

export default eventsSchemasMap;
