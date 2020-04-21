import { REGEXP } from '../../constants';

import { EVENT_SEARCH_MODEL } from './events.dto';

const eventsSchemasMap = {
  getEventById: {
    querystring: {
      type: 'object',
      properties: {
        operator: {
          type: 'string'
        }
      }
    },
    params: {
      type: 'object',
      required: ['id'],
      properties: {
        id: {
          type: 'string',
          pattern: REGEXP.NOT_EMPTY_STRING
        }
      }
    },
    description: 'Endpoint to fetch event by id',
    tags: ['events'],
    summary: 'Find event by id'
    // response: {
    //   200: {
    //     description: 'Successful response',
    //     type: 'object',
    //     properties: {
    //       data: {
    //         type: 'object',
    //         // properties: EVENT_MODEL
    //       }
    //     }
    //   }
    // }
  },
  searchEvents: {
    params: {
      type: 'object',
      required: ['search'],
      properties: {
        search: {
          type: 'string',
          pattern: REGEXP.NOT_EMPTY_STRING
        }
      }
    },
    querystring: {
      type: 'object',
      properties: {
        operator: {
          type: 'string'
        },
        limit: {
          type: 'number'
        }
      }
    },
    description: 'Endpoint to search events',
    tags: ['events'],
    summary: 'Search events',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          data: {
            type: 'array',
            items: {
              type: 'object',
              properties: EVENT_SEARCH_MODEL
            }
          }
        }
      }
    }
  }
};

export default eventsSchemasMap;
