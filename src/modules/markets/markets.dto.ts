import { PATTERN_MODEL, SELECTION_MODEL } from '../selections';

export const MARKET_MODEL = {
  _id: { type: 'string' },
  Name: { type: 'string' },
  NamePattern: PATTERN_MODEL,
  BetslipLine: { type: 'string' },
  BetslipLinePattern: PATTERN_MODEL,
  MarketType: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      Name: { type: 'string' },
      NamePattern: {
        type: 'object',
        properties: PATTERN_MODEL
      },
      LineTypeId: { type: 'string' },
      LineTypeName: { type: 'string' },
      ShortName: { type: 'string' },
      IsCastMarket: { type: 'boolean' }
    }
  },
  EventId: { type: 'string' },
  LeagueId: { type: 'string' },
  SportId: { type: 'string' },
  StartDate: { type: 'string' },
  Title: { type: 'string' },
  ParticipantMapping: { type: 'string' },
  Selections: {
    type: 'array',
    items: {
      type: 'object',
      properties: SELECTION_MODEL
    }
  },
  IsLive: { type: 'boolean' },
  IsSuspended: { type: 'boolean' },
  LiveData: {
    type: 'object',
    properties: {
      ScoreHome: { type: 'string' },
      ScoreAway: { type: 'string' }
    }
  },
  Tags: { type: 'array', items: { type: 'string' } },
  Groups: { type: 'array', items: { type: 'string' } },
  CastMarkets: { type: 'array', items: { type: 'string' } },
  InMarketGroups: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        sortingKey: { type: 'number' }
      }
    }
  }
};
