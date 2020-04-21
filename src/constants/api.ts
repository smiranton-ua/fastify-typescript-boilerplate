export const PREFIX = {
  EVENTS: '/api/events',
  MARKETS: '/api/markets',
  SELECTIONS: '/api/selections'
};

export const PATH = {
  GET_BY_ID: '/:id',
  SEARCH_EVENTS: '/search/:search'
};

export enum METHOD {
  post = 'post',
  get = 'get',
  put = 'put'
}
